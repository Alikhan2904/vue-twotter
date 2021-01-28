import { createStore } from 'vuex'
import { UserModule } from './User'

export default createStore({
  state: {
    user: null
  },

  // functions that directly change the state
  mutations: {},

  // functions that calls mutations
  actions: {},

  modules: {
    User: UserModule
  }
})
