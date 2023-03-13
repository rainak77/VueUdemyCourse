const app=Vue.createApp({
    data(){
        return {
            courseGoalA: "Finnish Course and Learn Vue",
            courseGoalB: "Master Vue and build amazing app",
            vueLink: "https://vuejs.org"
        };
    },
    methods:{
        outputGoal: function(){
            const randomNumber= Math.random();
            if(randomNumber < 0.5){
                return this.courseGoalA;
            }else{
                return this.courseGoalB;
            }
        }
    }
});
app.mount('#user-goal');