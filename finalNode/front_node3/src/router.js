import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/Projets',
            name: 'projets',
            component: () => import('./views/Projects.vue')
        },
        {
            path: '/Projets-details/:id',
            name: 'Projets-details',
            component: () => import('./views/ProjectDetail.vue')
        },
        {
            path: '/Projets/create',
            name: 'Projets/create',
            component: () => import('./views/ProjectNew.vue')
        },
        {
            path: '/Projets-edit/:id',
            name: 'Projets-edit',
            component: () => import('./views/ProjectEdit.vue')
        },
        {
            path: '/Salaries',
            name: 'Salaries',
            component: () => import('./views/Salaries.vue')
        },
        {
            path: '/Salaries-details/:id',
            name: 'Salaries-details',
            component: () => import('./views/SalarieDetail.vue')
        },
        {
            path: '/Salaries/create',
            name: 'Salaries/create',
            component: () => import('./views/SalarieNew.vue')
        },
        {
            path: '/Salaries-edit/:id',
            name: 'Salaries-edit',
            component: () => import('./views/SalarieEdit.vue')
        },
        {
            path: '/Clients',
            name: 'Clients',
            component: () => import('./views/Clients.vue')
        },
        {
            path: '/Clients-details/:id',
            name: 'Clients-details',
            component: () => import('./views/ClientDetail.vue')
        },
        {
            path: '/Clients/create',
            name: 'Clients/create',
            component: () => import('./views/ClientNew.vue')
        },
        {
            path: '/Clients-edit/:id',
            name: 'Clients-edit',
            component: () => import('./views/ClientEdit.vue')
        }

    ]
})