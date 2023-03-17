const app = Vue.createApp({
    data() {
        return {
            Name:"arif",
            Age: 41,                      
            imageUrl: "https://commons.wikimedia.org/wiki/Category:PD_CERN-CMS#/media/File:CMS_Hcal_26_01_2007.JPG",
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