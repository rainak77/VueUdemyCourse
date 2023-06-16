<template>
    <div>
        <base-dialog :show="!!error" title="an error occured" @close="handleError">
            <p>{{ error }}</p>
        </base-dialog>
        <section>
            <base-card>
                <header>
                    <h2>Request recieved </h2>
                </header>
                <div v-if="isLoading">
                    <base-spinner></base-spinner>
                </div>
                <ul v-else-if="hasRequests && !isLoading">
                    <request-item v-for="request in recievedRequest" :key="request.id" :email="request.userEmail"
                        :message="request.message">
                    </request-item>
                </ul>
                <h3 v-else>You have not recieved any requests yet!</h3>
            </base-card>
        </section>
    </div>
</template>

<script>
import RequestItem from '../../components/requests/RequestItem.vue';
export default {
    components: { RequestItem },
    data() {
        return {
            error: null,
            isLoading: true
        }
    },
    computed: {
        recievedRequest() {
            return this.$store.getters['requests/requests'];
        },
        hasRequests() {
            return this.$store.getters['requests/hasRequests'];
        }
    },
    methods: {
        async loadRequest() {
            this.isLoading = true;
            try {
                await this.$store.dispatch('requests/loadcontact')
            } catch (error) {
                this.errorerror = error.message || 'some thing has failed'
            }
            this.isLoading = false;
        },
        handleError() {
            this.error = null;
        }
    },
    created() {
        this.loadRequest();
    }
}
</script>

<style scoped>
header {
    text-align: center;
}

ul {
    list-style: none;
    margin: 2rem auto;
    padding: 0;
    max-width: 30rem;
}

h3 {
    text-align: center;
}
</style>