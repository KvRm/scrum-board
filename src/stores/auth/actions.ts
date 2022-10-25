import router from '@/router'
import { ActionTree } from 'vuex'
import { Actions, AuthActionsEnum } from './action-types'
import { RootState } from '@/stores/types'
import { AuthMutationEnum } from './mutation-types'
import { LoginRequest, RegisterRequest } from '@/types/auth'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  UserCredential
} from 'firebase/auth'
import { auth } from '@/services/auth'
import { LocalStorageKeys, useLocalStorage } from '@/composables/localStorage'

export const actions: ActionTree<RootState['auth'], RootState> & Actions = {
  async [AuthActionsEnum.LOGIN]({ commit, state }, body: LoginRequest) {
    try {
      commit(AuthMutationEnum.LOADING, true)

      const userCredential: UserCredential = await signInWithEmailAndPassword(
        auth,
        body.email,
        body.password
      )

      const { uid, refreshToken, email } = userCredential.user

      const ls = useLocalStorage()

      ls.set(LocalStorageKeys.TOKEN, refreshToken)

      commit(AuthMutationEnum.AUTHENTICATED, true)
      commit(AuthMutationEnum.USER, {
        email: email as string,
        token: refreshToken,
        uid: uid
      })

      if (!state.authenticated) return

      router.push('/')
    } catch (error) {
      commit(AuthMutationEnum.ERROR, (error as Error).message)
    } finally {
      commit(AuthMutationEnum.LOADING, false)
    }
  },

  async [AuthActionsEnum.REGISTER]({ commit, state }, body: RegisterRequest) {
    try {
      commit(AuthMutationEnum.ERROR, '')
      commit(AuthMutationEnum.LOADING, true)

      const userCredential: UserCredential =
        await createUserWithEmailAndPassword(auth, body.email, body.password)

      const { uid, refreshToken } = userCredential.user

      commit(AuthMutationEnum['AUTHENTICATED'], true)
      commit(AuthMutationEnum['USER'], {
        uid: uid,
        email: body.email,
        token: refreshToken
      })

      if (!state.authenticated) throw new Error('Session Expired')

      router.push('/')
    } catch (error) {
      commit(AuthMutationEnum.ERROR, (error as Error).message)
    } finally {
      commit(AuthMutationEnum.LOADING, false)
    }
  }

  // [AuthActionsEnum.LOGOUT]({ commit }) {
  //   commit(AuthMutationEnum.RESET, undefined)

  //   router.push('/login')
  // }

  // async [AuthActionsEnum.AUTO_LOGIN]({ dispatch, commit, state }) {
  //   try {
  //     await dispatch(AuthActionsEnum.GET_USER_INFO)

  //     if (!state.authenticated) throw new Error('Session Expired')

  //     return Promise.resolve()
  //   } catch (err) {
  //     commit(AuthMutationEnum.AUTHENTICATED, false)
  //     commit(AuthMutationEnum.ERROR, (err as Error).message)
  //   }
  // },

  // async [AuthActionsEnum.GET_USER_INFO]({ commit }) {
  //   try {
  //     commit(AuthMutationEnum.ERROR, '')
  //     commit(AuthMutationEnum.LOADING, true)

  //     const { data, status } = await getUserInfo()

  //     if (status !== 200) throw new Error('Fail to authenticate')

  //     commit(AuthMutationEnum.USER, data.user)
  //     commit(AuthMutationEnum.AUTHENTICATED, true)

  //     return true
  //   } catch (error) {
  //     commit(AuthMutationEnum.ERROR, (error as Error).message)
  //     return false
  //   } finally {
  //     commit(AuthMutationEnum.LOADING, false)
  //   }
  // }
}
