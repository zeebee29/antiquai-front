import { createRouter, createWebHistory } from 'vue-router'
//import PageMenus from '@/views/PageMenus.vue'
import PageCarte from './views/PageCarte.vue'
import PageInscription from './views/PageInscription.vue'
import PageLogin from './views/PageLogin.vue'


const routes = [
    {
        path: '/',
        name: 'HomeQuai',
        component: () => import(/* webpackChunkName: "menus" */ '@/views/HomeQuai.vue')
    },
    {
        path: '/menus',
        name: 'PageMenus',
        component: () => import(/* webpackChunkName: "menus" */ '@/views/PageMenus.vue')
    },
    {
        path: '/carte',
        name: 'PageCarte',
        component: PageCarte
    },
    {
        path: '/inscription',
        name: 'PageInscription',
        component: PageInscription
    },
    {
        path: '/login',
        name: 'PageLogin',
        component: PageLogin
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router


