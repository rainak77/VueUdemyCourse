Vue.createApp({
   data(){ 
    return {
        goals:[],
        enteredValue: ''
    };
   },
   methods: {
    addgoal(){  
        this.goals.push(this.enteredValue);
        this.enteredValue='';
    }
   }
}).mount("#app");