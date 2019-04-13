import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import Chatting from '../components/Chatting'
import AI from '../components/AI'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login
        },
        {
            path: '/chatting',
            name: 'Chatting',
            component: Chatting
        },
        {
            path: '/ai',
            name: 'AI',
            component: AI
        }
    ]
})

export default router