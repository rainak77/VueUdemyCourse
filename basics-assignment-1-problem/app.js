const app = Vue.createApp({
    data() {
        return {
            Name:"arif",
            Age: 41,                      
            imageUrl: "pic.jpg",
        }
    },
    methods: {
        ExtendedAge(){
            return this.Age + 5;
        },
        CalculateRandom(){
            return Math.random();
        }
    },
})

app.mount('#assignment');