<template>
  <ul>
    <li v-for="(movie, index) in movies" :key="index">
      <Movie :movie="movie" />
    </li>
  </ul>
</template>

<script>
import Movie from './Movie.vue'
export default {
  name: 'MoviesList',
  data() {
    return {
      movies: [],
    }
  },
  created: function() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      try {
        const res = await fetch(
          'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=fa44637c4e3d45f7962fe730ff605501'
        )
        const movies = await res.json()
        this.movies = movies.results
      } catch (e) {
        console.log(e)
      }
    },
  },
  components: {
    Movie,
  },
}
</script>

<style scoped>
ul {
  display: grid;
  list-style: none;
  padding: 1rem;
  margin: 0;
  gap: 1rem;
  grid-template-columns: repeat(6, 1fr);
}
</style>
