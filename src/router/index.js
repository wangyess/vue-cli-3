import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
Vue.use(VueRouter)

const router = new VueRouter({
    base: '/production-sub-path/',     // 路由路径的前缀,需要和 nginx 中的配置保持一致.
    mode: 'history', // 切换路径模式，变成history模式
    scrollBehavior: () => ({y: 0}),
    routes
})

export default router  