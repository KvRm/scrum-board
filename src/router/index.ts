import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { boardRoutes } from './modules/board.routes'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    component: () => import('../views/MainView.vue')
  },
  {
    path: '/my-tasks',
    name: 'my-tasks',
    component: () => import('../views/MyTasksView.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/SearchView.vue')
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import('../views/AuthView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue')
  },
  ...boardRoutes
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
