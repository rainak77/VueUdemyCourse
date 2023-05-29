<template>
    <h3 class="counter">{{ finalCounter }}</h3>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    computed: {
        // counter() {
        //     return this.$store.getters.finalCounter;
        // }
        ...mapGetters(['finalCounter'])
    }
}
</script>