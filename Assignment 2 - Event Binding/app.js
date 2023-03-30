const app = Vue.createApp({
    data() {
      return {               
        confirmedName:'',
        entername:'',
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

      setEnterName(event){
        this.entername = event.target.value;
      },
      enterName(){
        this.confirmedEntername = this.entername;
      }

    }
  });
  
  app.mount('#assignment');
  