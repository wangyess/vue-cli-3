import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as httpRequest from './util/https'
import bus from './util/bus'
// import mock from './mock'
if(process.env.NDDE_ENV !== 'production') require('./mock/index')

Vue.config.productionTip = false
Vue.prototype.$https = httpRequest 
Vue.prototype.$bus = bus 

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
