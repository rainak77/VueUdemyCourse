const app = Vue.createApp({
  data() {
    return { 
      goals: [],
      userInputGoal:""
    };
  },
  methods: {
    addGoal(){
      this.goals.push(this.userInputGoal)
      this.userInputGoal="";
    }
  },
});

app.mount('#user-goals');
