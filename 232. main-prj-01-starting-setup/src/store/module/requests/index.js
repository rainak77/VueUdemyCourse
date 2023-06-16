import mutations from './mutations';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
        requests: []
    };
  },
  mutations: mutations,
  actions: actions,
  getters: getters,
};