<template>
    <section>
        <base-card>
            <h2>{{ fullName }}</h2>
            <h3>${{ rate }}</h3>
        </base-card>
    </section>

    <section>
        <base-card>
            <header>
                <h2>Interested ? Reach out now!</h2>
                <base-button link :to="contactLink">Contact</base-button>
            </header>
            <router-view></router-view>
        </base-card>
    </section>

    <section>
        <base-card>
            <base-badge v-for="area in areas" :key="area" :title="area" :type="area"></base-badge>
            <p>{{ description }}</p>
        </base-card>
    </section>
</template>

<script>
export default {
    props: ['id'],
    data(){
        return {            
            selectedCoach:null,
        }
    },
    computed:{        
        fullName(){
            console.log('computed');
            return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName;
        },
        areas(){
            return this.selectedCoach.areas;
        },
        description(){
            return this.selectedCoach.description;
        },
        rate(){
            return this.selectedCoach.hourlyRate;
        }
    },
    created(){
        console.log('created');
        this.selectedCoach = this.$store.getters['coaches/coaches'].find(coach=>coach.id === this.id)
    }
}
</script>

<style>

</style>
