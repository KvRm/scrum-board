import type { RouteLocationNormalized } from 'vue-router'
import { LocalStorageKeys, useLocalStorage } from '@/composables/localStorage'
import { useStore } from '@/stores'

export const routerGuard = async (to: RouteLocationNormalized) => {
  if (to.meta.auth) {
    const store = useStore()
    const ls = useLocalStorage()
    const token = ls.get(LocalStorageKeys.TOKEN)

    if (token) {
      try {
        // await store.dispatch('authAutoLogin')

        if (!store.getters.authState) return { name: 'login' }

        return true
      } catch (err) {
        ls.remove(LocalStorageKeys.TOKEN)
        return { name: 'login' }
      }
    } else {
      return { name: 'login' }
    }
  }
}
