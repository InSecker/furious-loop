import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/listing',
    name: 'Listing',
    component: () => import(/* webpackChunkName: "about" */ '../views/Listing.vue')
  },
  {
    path: '/article/:id',
    name: 'article',
    component: () => import(/* webpackChunkName: "about" */ '../views/Article.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
