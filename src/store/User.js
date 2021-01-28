export const UserModule = {
  namespaced: true,

  state: {
    user: null
  },

  // functions that directly change the state
  mutations: {
    SET_USER(state, user) {
      state.user = user
      console.log(12, state.user)
    }
  },

  // functions that calls mutations
  actions: {
    setUser({ commit }, user) {
      commit('SET_USER', user)
    }
  }
}
