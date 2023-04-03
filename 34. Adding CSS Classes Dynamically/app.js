const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },
  computed: {
    boxBclass() {
      return { active: this.boxBSelected };
    },
  },
  methods: {
    boxselected(box) {
      console.log(box);
      if (box === "A") {
        console.log("click");
        this.boxASelected = !this.boxASelected;
      } else if (box === "B") {
        this.boxBSelected = !this.boxBSelected;
      } else {
        this.boxCSelected = !this.boxCSelected;
      }
    },
  },
});

app.mount("#styling");
