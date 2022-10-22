import type { LoginRequest } from '@/types'
import { signInWithEmailAndPassword, UserCredential } from 'firebase/auth'
import { auth } from '../auth'

export const login = (body: LoginRequest): Promise<UserCredential> => {
  return signInWithEmailAndPassword(auth, body.email, body.password)
}
