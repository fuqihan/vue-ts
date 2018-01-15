export default {
    loginInfo({commit}, data) {
      console.log(data)
      commit('LOGIN_INFO', data)
    }
  }
  