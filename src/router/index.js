import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import detail from './../components/detail'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/detail',
    name:'Detail',
    component: detail
  }
]

const router = new VueRouter({
  routes
})

export default router
