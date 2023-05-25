<template>
  
    <router-view v-slot="slotProps">
      <transition name="showBtn" mode="out-in">  
        <component :is="slotProps.Component"> </component>
      </transition>
    </router-view>

  <!-- <div class="container">
    <div class="block" :class="{ animate: animatedBlock }"></div>
    <button @click="animateBlock">Animate</button>
  </div>

  <div class="container">
    <Transition name="showBtn" mode="out-in" >
      <button @click="showUser" v-if="!userVisible">Show User</button>
      <button @click="hideUser" v-else>Hide User</button>
    </Transition>
  </div>

  <div class="container">
    <Transition name="para" @before-enter="beforeEnter" @before-leave="beforeLeave">
      <p v-if="paraIsVisible">This is sometimes visible</p>
    </Transition>
    <button @click="toggleParagraph">Toggle Paragraph</button>
  </div>
  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <UserList></UserList>
  </div>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div> -->
</template>  

<script>
// import UserList from './components/UserList.vue'
export default {
  // components: {UserList},
  data() {
    return {
      animatedBlock: false,
      dialogIsVisible: false,
      paraIsVisible: false,
      userVisible: false
    };
  },
  methods: {
    beforeEnter(el) {
      console.log('before enter',el)
    },
    beforeLeave(el) {
      console.log('before leave',el)
    },
    showUser() {
      this.userVisible = true;
    },
    hideUser() {
      this.userVisible = false;
    },

    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animateBlock() {
      this.animatedBlock = true;
    },
    toggleParagraph() {
      this.paraIsVisible = !this.paraIsVisible;
    }
  },
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

button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}

.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 0.5s ease-out; */
}

.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.animate {
  /* transform: translateX(-50px); */
  animation: slidefade 0.3s ease-out forwards;
}

.para-enter-from {
  /* opacity: 0;
transform: translateY(-30px); */
}

.para-enter-active {
  animation: slidefade 0.3s ease-out;
  /* transition: all 0.3s ease-out; */
}

.para-enter-to {
  /* opacity: 1;
  transform: translateY(0); */
}

.para-leave-from {
  /* opacity: 1;
transform: translateY(0); */
}

.para-leave-active {
  animation: slidefade 0.3s ease-in;
  /* transition: all 0.3s ease-in; */
}

.para-leave-to {
  /* opacity: 0;
transform: translateY(30px); */
}

.showBtn-enter-from {
  opacity: 0;
}

.showBtn-enter-active {
  /* animation: slidefade 0.3s ease-out; */
  transition: opacity .3s ease-in;
}

.showBtn-enter-to {
  opacity: 1;
}



.route-enter-from {
  
}

.route-enter-active {
  animation: slidefade 0.4s ease-out;  
}

.route-enter-to {
}

@keyframes slidefade {
  0% {
    transform: translateX(0) scale(1);
  }

  70% {
    transform: translateX(-120px) scale(1.1);
  }

  100% {
    transform: translateX(-150px) scale(1);
  }
}
</style>