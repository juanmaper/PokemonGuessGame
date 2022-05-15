<template>
  <h1>Who's that Pokémon?</h1>
  <PokemonPicture :pokemonId="4" :showPokemon="false" />
  <PokemonOptions :pokemons="pokemonArr"/>
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
      pokemonArr: []
    }
  },

  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions()
      console.log(this.pokemonArr);
    }
  },

  mounted() {
    this.mixPokemonArray()
  }

  
}
</script>
