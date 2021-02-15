<template>
  <div class="movie-wrapper" :style="styles">
    <div class="movie-info">
      <h1>{{ movie.title }}</h1>
      <h3>Release Date: {{ movie.release_date }}</h3>
      <p>{{ movie.overview }}</p>
    </div>
  </div>
</template>

<script>
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280'
export default {
  // Not using a name and it is working, this is how it is done in the tutorial
  data() {
    return {
      movie: {},
    }
  },
  created: function() {
    this.fetchData()
  },
  computed: {
    styles() {
      return {
        background: `url(${BACKDROP_PATH}/${this.movie.backdrop_path}) no-repeat`,
      }
    },
  },
  methods: {
    async fetchData() {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=fa44637c4e3d45f7962fe730ff605501`
        )
        const movie = await res.json()
        this.movie = movie
      } catch (e) {
        console.log(e)
      }
    },
  },
}
</script>

<style scoped>
.movie-wrapper {
  position: relative;
  padding-top: 50vh;
  background-size: cover;
}
.movie-info {
  background: white;
  color: #222;
  padding: 1rem 10%;
}
</style>
