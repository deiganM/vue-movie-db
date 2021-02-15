// I ran 'npm install --save vue-router' before I made this file
// Don't forget to import this file in main.js
import Vue from 'vue';
import Router from 'vue-router'
import MoviesList from './components/MoviesList.vue'
import MoviesDetail from '@/components/MoviesDetail'
Vue.use(Router)

export default new Router({
  // Removes the hash in the history
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Movies List',
      component: MoviesList
    },
    {
      path: '/movie/:id',
      name: 'Movies Detail',
      component: MoviesDetail
    },
  ]
})