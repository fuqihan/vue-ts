/**
 * Created by fuqihan on 2017/3/29.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation'
import actions from './actions'

Vue.use(Vuex)
const state = {
  login: false
}

const store = new Vuex.Store({
  state,
  getters: {},
  mutations,
  actions,
  modules: {}
})

export default store
