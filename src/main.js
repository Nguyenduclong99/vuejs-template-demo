import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import router from './router'
import vueinterval from 'vue-interval/dist/VueInterval.common'

Vue.config.productionTip = false
Vue.use(vueinterval)
Vue.component('fa-icon', FontAwesomeIcon)
Vue.use(Antd);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
