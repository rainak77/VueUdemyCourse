<template>
  <base-container title="Vuex" v-if="isAuth">
    <the-counter></the-counter>
    <favorite-value></favorite-value>
    <button @click="addOne">Add 2</button>
  </base-container>

  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue'
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';



export default {
  components: {
    BaseContainer,
    TheCounter,
    FavoriteValue,
    UserAuth
  },
  computed:{
        isAuth(){
            return this.$store.getters.userIsAuthenticated;
        }
    },

  methods: {
    addOne() {
      this.$store.dispatch({
        type: 'increase',
        value: 2
      });
      // this.$store.commit('increase',{value:2});
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>