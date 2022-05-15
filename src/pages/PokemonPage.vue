<template>

  <h1 v-if="!pokemon">Waiting...</h1>

  <div v-else>
    <h1>Who's that Pokémon?</h1>
    <PokemonPicture 
      :pokemonId="pokemon.id" 
      :showPokemon="showPokemon" 
    />
    <PokemonOptions 
      :pokemons="pokemonArr"
      @selection="checkAnswer"
    />

    <template v-if="showAnswer">
    <h2>{{ message }}</h2>
        <button @click="newGame">
          New game
        </button>
    </template>
    

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
      showPokemon: false,
      showAnswer: false,
      message: ''
    }
  },

  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions()

      const rndInt = Math.floor( Math.random() * 4 )
      this.pokemon = this.pokemonArr[ rndInt ]
    },

    checkAnswer( pokemonId ) {
      this.showPokemon = true
      this.showAnswer = true

      if (this.pokemon.id === pokemonId){
        this.message = `Correct, ${ this.pokemon.name }`
      } else {
        this.message = `Oops, it was ${ this.pokemon.name }`
      }
    },

    newGame() {
      this.pokemonArr = []
      this.pokemon = null
      this.showPokemon = false
      this.showAnswer = false

      this.mixPokemonArray()
    }
  },

  mounted() {
    this.mixPokemonArray()
  }

  
}
</script>
