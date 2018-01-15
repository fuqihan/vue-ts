import * as mutationTypes from './mutation-types';
import { MutationTree } from 'vuex';

const mutations: MutationTree<any> = {
  [mutationTypes.LOGIN_INFO](state, data) {
    state.login = data;
  }
}

export default mutations
