<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <h2>{{ userAge }}</h2>
    <button @click="setAge">ChangeAge</button>

    <div>
      <input type="text" placeholder="First name" v-model="user.firstName">
      <input type="text" placeholder="lastName" v-model="user.lastName">
    </div>

  </section>
</template>

<script>
import { reactive, computed, watch,ref } from 'vue';
export default {
  setup() {

    //  const name =  ref('Maximilian');
    const user = reactive({
      firstName: '',
      lastName: '',
    });
  const userAge =  ref(32);

    function setAge() {
      userAge.value = 52;
    }
    const uName = computed(function () {
      return user.firstName + ' ' + user.lastName;
    });
    watch(userAge, function (newValue, oldValue) {
      console.log('old Age-',oldValue);
      console.log('onew Age-',newValue)

    });

    //  setTimeout(function(){
    //   user.userName= 'Bob';
    //   user.userAge=50;
    //  },2000)

    return { user,userAge, setAge, userName: uName };
  }
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },
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

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>