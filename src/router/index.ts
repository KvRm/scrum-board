import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: () => {
      return { path: '/main' }
    }
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('../views/Main/MainView.vue')
  },
  {
    path: '/board',
    name: 'board',
    component: () => import('../views/Board/BoardView.vue')
  },
  {
    path: '/my-tasks',
    name: 'my-tasks',
    component: () => import('../views/MyTasks/MyTasksView.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/Search/SearchView.vue')
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import('../views/Auth/AuthView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register/RegisterView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
