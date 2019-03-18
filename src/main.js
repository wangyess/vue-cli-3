import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as httpRequest from './util/https'
import bus from './util/bus'
import iView from 'iview';
import 'iview/dist/styles/iview.css'
import '@/assets/font/iconfont.css'
if (process.env.NDDE_ENV !== 'production') require('./mock/index')
Vue.config.productionTip = false
Vue.prototype.$https = httpRequest
Vue.prototype.$bus = bus
Vue.use(iView)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
