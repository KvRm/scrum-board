import { Board, User } from '@/types'
import { AuthStore } from './auth'
// import { BoardStore } from './board'

export interface RootState {
  auth: {
    user?: User
    authenticated: boolean
    loading: boolean
    error: string
  }
  board: {
    board?: Board
    isAvailable: boolean
    loading: boolean
    error: string
  }
}

export type Store = AuthStore<Pick<RootState, 'auth'>> 
// & BoardStore<Pick<RootState, 'board'>>
