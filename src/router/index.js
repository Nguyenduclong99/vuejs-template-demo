import Vue from 'vue'
import VueRouter from 'vue-router'
import detail from './../components/detail/detail.vue'
import cart from './../components/cart/cart.vue'
import login from './../components/login-register/login.vue'
import checkout from './../components/check-out/checkout.vue'
import listitem from './../components/list-item/listitem.vue'
import Index from './../components/Index.vue'
import About from './../components/about/about.vue'
import MyAcc from './../components/my-acc/myacc.vue'
Vue.use(VueRouter)
const routes = [
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
  },
  {
    path:'/about',
    name:"About",
    component: About
  },
  {
    path: '/myacc',
    name : "Myacc",
    component: MyAcc
  }
]
const router = new VueRouter({
  mode: 'history',
  routes
})
export default router
