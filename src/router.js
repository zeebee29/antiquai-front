import { createRouter, createWebHistory } from 'vue-router'
//import PageMenus from '@/views/PageMenus.vue'
import PageCarte from '@/views/PageCarte.vue'


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
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router


