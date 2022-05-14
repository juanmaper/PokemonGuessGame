<template>

  <div class="div pokemon-container">
    <img 
      class="hidden-pokemon"
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" 
      alt="Pokemon">

    <!-- <img 
      class="fade-in" 
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" 
      alt="Pokemon"> -->
    </div>

  
</template>

<script>
export default {

}
</script>

<style scoped>

.pokemon-container {
    height: 200px;
}
/* user-select -> Avoid dragging the image to show the original image without brightness 0 */
img {
    height: 200px;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
}
.hidden-pokemon {
    filter: brightness(0);
}
</style>