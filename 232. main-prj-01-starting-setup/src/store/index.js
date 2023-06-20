import { createStore } from 'vuex';
import coachesModule from './module/coaches/index.js';
import requestModule from './module/requests/index.js'
import authModule from './module/auth/index.js'


const store = createStore({
  modules: {
    coaches: coachesModule,
    requests: requestModule,
    auth: authModule
  }
 
});
export default store;
