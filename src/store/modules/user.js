import Vue from 'vue'
const state = {
  username: 'admin'
}

const mutations = {
  /**
   * 开始时 state 中没有 你要用到的字段  要这样写  视图才可以刷新
   * Vue.set(state,'age','23')
   * 第一个参数是传进来的state 这个是mutations 函数默认传递的
   * 第二个参数是  你要定义的字段
   * 第三个参数是 字段的值
   */
  addColumn(state) {
    Vue.set(state,'age','23')
  }
}

const actions = {
  // 
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}