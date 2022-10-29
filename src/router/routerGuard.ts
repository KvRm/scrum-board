import type { RouteLocationNormalized } from 'vue-router'
import { isLoggedIn } from '@/services/authStateChecker'

export const routerGuard = async (to: RouteLocationNormalized) => {
  if (to.meta.auth === true) {
    if (await isLoggedIn()) return true
    else
      return {
        name: 'login'
      }
  } else if (to.meta.auth === false) {
    if (await isLoggedIn()) return { name: 'main' }
  }
}
