import type { Module } from 'vuex'
import type { RootState } from '@/stores/types'
import { mutations } from './mutations'
import { actions } from './actions'
import { getters } from './getters'

export const authModule: Module<RootState['auth'], RootState> = {
  state: () => ({
    user: {
      email: '',
      token: '',
      uid: ''
    },
    authenticated: false,
    loading: false,
    error: ''
  }),

  mutations,
  getters,
  actions
}
