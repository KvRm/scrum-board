import { GetterTree } from 'vuex'
import { RootState } from '../types'

export type Getters<S = RootState['auth']> = {
  errorState(state: S): string
}

export const getters: GetterTree<RootState['auth'], RootState> & Getters = {
  errorState: (state) => state.error
}
