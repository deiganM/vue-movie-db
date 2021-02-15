<template>
  <div>
    {{ movie.title }}
  </div>
</template>

<script>
export default {
  name: 'MoviesList',
  data() {
    return {
      movie: {},
    }
  },
  created: function() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      try {
        const res = await fetch(
          'https://api.themoviedb.org/3/movie/550?api_key=fa44637c4e3d45f7962fe730ff605501'
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

<style></style>
