import type { RouteLocationNormalized } from 'vue-router'
import { LocalStorageKeys, useLocalStorage } from '@/composables/localStorage'

export const routerGuard = async (to: RouteLocationNormalized) => {
  const ls = useLocalStorage()
  const token = ls.get(LocalStorageKeys.TOKEN)

  if (to.meta.auth) {
    if (token) return true
    else
      return {
        name: 'login'
      }
  } else {
    if (token) return { name: 'main' }
  }
}
