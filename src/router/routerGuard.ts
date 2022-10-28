import type { RouteLocationNormalized } from 'vue-router'
import { IsLoggedIn } from '@/services/authStateChecker'

export const routerGuard = async (to: RouteLocationNormalized) => {
  if (to.meta.auth === true) {
    if (await IsLoggedIn()) return true
    else
      return {
        name: 'login'
      }
  } else if (to.meta.auth === false) {
    if (await IsLoggedIn()) return { name: 'main' }
  }
}
