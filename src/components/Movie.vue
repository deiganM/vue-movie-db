<template>
  <img :src="movie.posterPath" :alt="movie.title" />
</template>

<script>
export default {
  // This may break the app according to a comment?
  name: 'Movie',
  props: ['movie'],
}
</script>

<style></style>
