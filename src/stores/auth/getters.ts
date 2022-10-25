import { User } from '@/types'
import { GetterTree } from 'vuex'
import { RootState } from '../types'

export type Getters<S = RootState['auth']> = {
  errorState(state: S): string
  authState(state: S): boolean
  loadingState(state: S): boolean
  userState(state: S): User
}

export const getters: GetterTree<RootState['auth'], RootState> & Getters = {
  errorState: (state) => state.error,
  authState: (state) => state.authenticated,
  loadingState: (state) => state.loading,
  userState: (state) => state.user
}
