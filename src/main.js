import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import bus from './util/bus'
// import mock from './mock'

Vue.config.productionTip = false
Vue.prototype.$http = axios 
Vue.prototype.$bus = bus 

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
