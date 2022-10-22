export interface User {
  id: string
  email: string
  password: string
  ownBoardsIds: string[]
  allBoardIds: string[]
}
