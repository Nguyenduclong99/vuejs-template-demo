import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import detail from './../components/detail/detail.vue'
import cart from './../components/cart/cart.vue'
import login from './../components/login-register/login.vue'
import checkout from './../components/check-out/checkout.vue'
import listitem from './../components/list-item/listitem.vue'
import Index from './../components/Index.vue'
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
  },
  {
    path:'/cart',
    name:'Cart',
    component: cart
  },
  {
    path:'/login',
    name: "Login",
    component: login
  },
  {
    path:'/checkout',
    name:"Checkout",
    component: checkout
  },
  {
    path:'/list-item',
    name:"List-item",
    component: listitem
  },
  {
    path:'/home',
    name:"Home",
    component: Index
  }
 
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
