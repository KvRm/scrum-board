import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    component: () => import('../views/MainView.vue')
  },
  {
    path: '/board/:board',
    name: 'board',
    component: () => import('../views/BoardView.vue')
  },
  {
    path: '/board/:board/:task',
    name: 'task',
    component: () => import('../views/TaskView.vue')
  },
  {
    path: '/my-tasks',
    name: 'my-tasks',
    component: () => import('../views/MyTasksView.vue')
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
  {
    path: '/error-404',
    name: 'error-404',
    component: () => import('@/layout/Error404Layout.vue')
  },
  {
    path: '/:pathMatch(.*)',
    redirect: 'error-404'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
