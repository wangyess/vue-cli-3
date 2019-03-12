import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import user from './modules/user'
import saveInLocal from './plugin/saveInLocal'
Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  state,
  mutations,
  actions,
  modules: {
    user
  },
  plugins: [saveInLocal]
})

export default store