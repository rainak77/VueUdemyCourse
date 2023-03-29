const app = Vue.createApp({
    data() {
      return {               
        confirmedName:'',       
        confirmedEntername:''
      };
    },
    methods: {      
      showAlert(){       
        alert("button clicked")
      },     
      confirmName(event){
        this.confirmedName = event.target.value;
      },

      enterName(event){
        this.confirmedEntername = event.target.value;
      }

    }
  });
  
  app.mount('#assignment');
  