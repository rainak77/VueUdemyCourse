const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  computed: {
    fullname() {
      console.log("running")
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Hossain";
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
