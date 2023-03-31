const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      // fullname:'',
      lastName:""
    };
  },
  // watch:{
  //   name(value){
  //     if (value === "") {
  //       this.fullname = '';
  //        }else {
  //         this.fullname = value + ' ' + 'hossain';
  //        }      
  //   }
  // },
  computed: {
    fullname() {
      console.log("running")
      if (this.name === "" && this.lastName==="") {
        return "";
      }
      return this.name + " " + this.lastName;
    },
  },

  methods: {
    // setName(event) {
    //   this.name = event.target.value;
    // },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    reset() {
      this.name = "";
      this.lastName="";
    },
    outputName() {
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Hossain";
    },
  },
});

app.mount("#events");
