
const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },

beforeCreate() {
  console.log("before create()")
},
created() {
  
},
beforeMount() {
  
},

mounted() {
  
},

});

app.component('user-contact',{})
app.mount('#app');
