export default {
  state: {
    loginStatus: false
  },
  mutations: {
    LOGIN_IN (state, status) {
      state.loginStatus = status
    },
    LOGIN_OUT (state, status) {
      state.loginStatus = status
    }
  },
  actions: {
    loginIn ({commit}, status) {
      commit('LOGIN_IN', status)
    },
    loginOut ({commit}, status) {
      commit('LOGIN_OUT', status)
    }
  }
}
