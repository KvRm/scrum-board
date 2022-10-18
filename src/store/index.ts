import { createStore } from 'vuex'
import { boardStore } from './modules/board.store'

export default createStore({
  modules: {
    boardStore: boardStore
  }
})
