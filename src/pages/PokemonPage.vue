<template>

  <template v-if="!pokemon">
    <h1 >Waiting...</h1>
    <img src="@/assets/pokeball.png" alt="pokeball" width="200" height="200">
  </template>

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

    <div v-if="showAnswer" class="bottom">
      <h2>{{ message }}</h2>
      <button @click="newGame">
        New game
      </button>
    </div>

    <img class="bottom" src="@/assets/pokeballRolling.gif" alt="pokeball" width="100" height="100">
    

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

<style scoped>

.bottom {
  margin-left: 40px;
}


</style>
