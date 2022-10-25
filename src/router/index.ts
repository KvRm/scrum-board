import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { routerGuard } from './routerGuard'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    component: () => import('../views/MainView.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/board/:board',
    name: 'board',
    component: () => import('../views/BoardView.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/board/:board/:task',
    name: 'task',
    component: () => import('../views/TaskView.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/my-tasks',
    name: 'my-tasks',
    component: () => import('../views/MyTasksView.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../layout/LoginView.vue'),
    meta: {
      login: true
    }
  },
  {
    path: '/error-404',
    name: 'error-404',
    component: () => import('@/layout/Error404Layout.vue'),
    meta: {
      error: true
    }
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

router.beforeEach(routerGuard)

export default router
