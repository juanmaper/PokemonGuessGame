<template>
  <h1>Who's that Pokémon?</h1>
  <PokemonPicture :pokemonId="4" :showPokemon="false" />
  <PokemonOptions />
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture'
import PokemonOptions from '@/components/PokemonOptions'

import getPokemonOptions from '@/helpers/getPokemonOptions'

console.log( getPokemonOptions() );

export default {
  name: 'PokemonPage',
  components: {
    PokemonPicture,
    PokemonOptions
  }
}
</script>
