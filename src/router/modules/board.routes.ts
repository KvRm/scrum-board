import { RouteRecordRaw } from 'vue-router'

export const boardRoutes: Array<RouteRecordRaw> = [
  {
    path: '/:board',
    name: 'board',
    component: () => import('../views/BoardView.vue'),
    children: [
      {
        path: '/:task',
        name: 'task',
        component: () => import('@/views/TaskView.vue')
      }
    ]
  }
]
