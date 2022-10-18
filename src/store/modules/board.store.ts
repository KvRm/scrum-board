export interface boardState {
  count: number
}

export const boardStore = {
  state: (): boardState => ({
    count: 0
  }),
  getters: {},
  mutations: {},
  actions: {}
}
