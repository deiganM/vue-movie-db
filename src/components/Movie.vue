<template>
  <!-- So you can click on the movie image and see the info -->
  <router-link :to="moviePath">
    <img :src="posterImage" :alt="movie.title" />
  </router-link>
</template>

<script>
const POSTER_PATH = 'http://image.tmdb.org/t/p/w154'
export default {
  // This may break the app according to a comment?
  name: 'Movie',
  props: ['movie'],
  computed: {
    posterImage() {
      return `${POSTER_PATH}/${this.movie.poster_path}`
    },
    moviePath() {
      return `/movie/${this.movie.id}`
    },
  },
}
</script>

<style scoped>
img {
  box-shadow: 0 0 35px black;
}
</style>
