<template>
    <h3 class="favorite">{{ normalizeCounter }}</h3>
    <p>we do more</p>
</template>


<script>
import {mapGetters} from 'vuex';
export default {
    computed: {
        // counter() {
        //     return this.$store.state.counter;
        // }
        ...mapGetters(['finalCounter','normalizeCounter'])
    }
}
</script>