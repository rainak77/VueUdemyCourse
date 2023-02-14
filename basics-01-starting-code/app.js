const app=Vue.createApp({
    data(){
        return {
            courseGoal: "Finnish Course and Learn Vue",
            vueLink: "https://vuejs.org"
        };
    }
});
app.mount('#user-goal');