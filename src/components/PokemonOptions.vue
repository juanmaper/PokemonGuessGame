<template>
  <div class="div options-container">
    <ul>
      <li v-for="pokemon in pokemons" 
          :key="pokemon.id"
          @click="$emit( 'pokemonSelection', pokemon.id )">
        {{ capitalize(pokemon.name) }}
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  props: {
    pokemons: {
      type: Array,
      required: true
    }
  },
  methods: {
    capitalize( s ) {
      return s && s[0].toUpperCase() + s.slice(1);
    }
  }
}
</script>

<style>
ul {
    list-style-type: none;
}
li {
    background-color: white;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    margin-bottom: 10px;
    width: 250px;
}

li:hover {
    background-color: rgba(0, 0, 0, 0.05);
}

.options-container {
    display: flex;
    justify-content: center;
}
</style>