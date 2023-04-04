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
      },
      removeGoal(index){
        this.goals.splice(index,1)
      }
    },
  });
  
  app.mount('#user-goals');
  