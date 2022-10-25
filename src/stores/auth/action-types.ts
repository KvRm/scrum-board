import { ActionContext } from 'vuex'
import { Mutations } from './mutation-types'
import { RootState } from '../types'
import { LoginRequest, RegisterRequest } from '@/types/auth'

// типизация стейта
type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<RootState['auth'], RootState>, 'commit'>

export enum AuthActionsEnum {
  LOGIN = 'LOGIN',
  REGISTER = 'REGISTER',
  LOGOUT = 'LOGOUT',
  GET_USER_INFO = 'GET_USER_INFO',
  AUTO_LOGIN = 'AUTO_LOGIN'
}

export interface Actions {
  // LOGIN(args: AugmentedActionContext, payload: LoginRequest): Promise<void>
  REGISTER(args: AugmentedActionContext, payload: RegisterRequest): Promise<void>
  // LOGOUT(args: AugmentedActionContext): void
}
