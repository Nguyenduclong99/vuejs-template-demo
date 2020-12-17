import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'

Vue.use(Viewer);
Vue.use(Vuex);
Vue.use(axios, VueAxios);
Vue.config.productionTip = false
Vue.component('fa-icon', FontAwesomeIcon)
Vue.use(Antd);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
