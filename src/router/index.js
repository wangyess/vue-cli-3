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


/**
 * 这里是前置守卫
 * to 代表要跳到的页面  from 即将离开的页面  next 继续执行
 * 可以用来判断权限 比如判断token是否存在  不存在跳转到login page
 */
// router.beforeEach((to, from, next) => {

// })

export default router