import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    fallback: true,
    routes: [
        {
            path: '/',
            name: 'Login',
            component: () => import('../components/Login.vue')
        },
        {
            path: '/chatting',
            name: 'Chatting',
            component: () => import('../components/Chatting.vue')
        },
        {
            path: '/ai',
            name: 'AI',
            component: () => import('../components/AI.vue')
        }
    ]
})

export default router