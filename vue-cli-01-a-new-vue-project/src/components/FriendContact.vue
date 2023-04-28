<template>
    <li>
        <h2>{{ name }} {{ isFavorite ? '(Favorite)' : '(Not Favorite)' }}</h2>
        <button @click="togglefavorite"> toggleIsfavorite</button>
        <button @click="toggleDetails">{{ detailsVisible ? 'Hide' : 'Show' }} Details</button>
        <ul v-if="detailsVisible">
            <li>name: {{ name }}</li>
            <li>phoneNumber: {{ phoneNumber }}</li>
            <li>email: {{ emailAddress }}</li>
        </ul>
        <button @click="$emit('delete',id)">Delete</button>
    </li>
</template>

<script>


export default {
    // props:['name','phoneNumber','emailAddress','isFavorite'],
    props: {
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true
        },
        emailAddress: {
            type: String,
            required: true
        },
        isFavorite: {
            type: Boolean,
            required: false,
            default: false,
            // validator: function(value){
            //     return  value === '1' || value === '0';
            // }
        }
    },
    emits:['toggle-favorite','delete'],
    // emits: {
    //     'toggle-favorite': function (id) {
    //         if (id) { return true; }
    //         else {
    //             console.warn("Id missing !!!");
    //             return false; }
    //     }
    // },
    data() {
        return {
            detailsVisible: false,
            // friendIsFavorite: this.isFavorite,
            // friend: {
            //     id: 'manuel',
            //     name: 'arif md',
            //     phone: '044991222',
            //     email: 'rainak_66@yahoo.com'
            // }
        }
    },
    methods: {
        toggleDetails() {
            this.detailsVisible = !this.detailsVisible;
        },
        togglefavorite() {
            // this.friendIsFavorite = !this.friendIsFavorite;
            this.$emit('toggle-favorite',this.id);

        },
    }    
};
</script>