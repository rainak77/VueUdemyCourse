<template>
  <button @click="confirmInput">confirm</button>
  <button @click="confirmSaved">save</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  data() {
    return {
      changesSaved: false,
    }
  },
  components: {
    UserItem,
  },
  inject: ['users'],
  methods: {
    confirmInput() {
      console.log('confirm input clicked');
      this.$router.push('/teams');
    },
    confirmSaved(){
      this.changesSaved = true;
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log('Userlist');
    next();
  },
  beforeRouteLeave (to, from, next) {
    if(this.changesSaved){
      next();
    }else{
      const userWantsToLeave = confirm('Are you are sure you have got unsaved changes');
      if(userWantsToLeave){
        next(userWantsToLeave);
      }
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>