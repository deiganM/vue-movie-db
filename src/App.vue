<template>
  <div id="app">
    <Header :title="title" />
    <router-view />
    <!-- <MoviesList /> -->
  </div>
</template>

<script>
import Header from './components/Header.vue'
// All moviesList items are coming from the router(routes.js), router-view
// import MoviesList from './components/MoviesList.vue'

export default {
  name: 'App',
  data() {
    return {
      title: 'Vue Movie DB',
    }
  },
  components: {
    Header,
    // MoviesList,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}
</style>
