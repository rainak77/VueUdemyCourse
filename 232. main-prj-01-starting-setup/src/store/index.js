import { createStore } from 'vuex';
import coachesModule from './module/coaches/index.js';
import requestModule from './module/requests/index.js'

const store = createStore({
  modules: {
    coaches: coachesModule,
    requests: requestModule
  },
  state() {
    return {
        userId:'c3'
    }
  },
  getters:{
    userId(state){
        return state.userId;
    }
  }
});
export default store;
