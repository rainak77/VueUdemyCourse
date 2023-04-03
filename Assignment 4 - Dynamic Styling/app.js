const app = Vue.createApp({
data() {
    return {
        userDefinedClass: '',
        show:true,
        hide:false,
        inputBackgroundclor:''
    };
},
methods: {
    toggleParagraph(){       
            this.show = !this.show;
            this.hide= !this.hide;
    }
},
})

app.mount("#assignment")