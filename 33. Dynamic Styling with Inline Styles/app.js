const app = Vue.createApp({
data(){
    return {
         boxASelected:false,
         boxBSelected:false,
         boxCSelected:false,
    };
},
methods: {
    boxselected(box){
        console.log(box);
        if(box==='A'){
            console.log('click');
            this.boxASelected = true;
        }else if(box==='B'){
            this.boxBSelected = true;
        }else{
            this.boxCSelected = true;
        }
    }
},
})

app.mount("#styling")