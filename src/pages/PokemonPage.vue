<template>

  <h1 v-if="!pokemon">Waiting...</h1>

  <div v-else>
    <h1>Who's that Pokémon?</h1>
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
    <PokemonOptions :pokemons="pokemonArr"/>
  </div>

</template>

<script>
import PokemonPicture from '@/components/PokemonPicture'
import PokemonOptions from '@/components/PokemonOptions'

import getPokemonOptions from '@/helpers/getPokemonOptions'

export default {
  name: 'PokemonPage',

  components: {
    PokemonPicture,
    PokemonOptions
  },

  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false
    }
  },

  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions()

      const rndInt = Math.floor( Math.random() * 4 )
      this.pokemon = this.pokemonArr[ rndInt ]
    }
  },

  mounted() {
    this.mixPokemonArray()
  }

  
}
</script>
