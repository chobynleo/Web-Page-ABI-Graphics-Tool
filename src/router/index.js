import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const commonRoutes = [
    {
        path: '/abi', // 点击侧边栏跳到一个单独的路由页面，需要定义，层级和其他顶级路由一样
        name: 'abi',
        meta: { title: 'abi图形化工具' },
        component: () => import('../components/ABI.vue'),
    },
    {
        path: '/404',
        name: '404',
        meta: { title: '404' },
        component: () => import('../components/404.vue'),
    },
    { path: '/', redirect: '/abi' },
]

// 本地所有的页面 需要配合后台返回的数据生成页面
export const asyncRoutes = {
}

const createRouter = () => new Router({
    routes: commonRoutes,
})

const router = createRouter()

export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher
}

export default router