<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperience">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading ...</p>
      <p v-else-if="!isLoading && error">{{ error }}</p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">No stored experience found. Start adding some survey result first</p>
      <ul v-else>
        <survey-result v-for="result in results" :key="result.id" :name="result.name" :rating="result.rating"></survey-result>
      </ul>   
    </base-card>
  </section>
</template>

<script>
import axios from 'axios';
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false,
      error: null

    }
  },
  methods: {
    loadExperience() {
      this.isLoading = true;
      const results = [];
      this.error = null;
      axios.get('https://vue-http-f7291-default-rtdb.europe-west1.firebasedatabase.app/surveys.json')
        .then((res) => {
          this.isLoading=false;
          for (const key in res.data) {
           results.push({
              id: key,
              name: res.data[key].name,
              rating: res.data[key].rating,
            });
          }
          this.results = results; 
          // this.results = res.data;    
        })
        .catch(()=> {
          this.isLoading = false;
          this.error = "Failed to fetch data. Please try again later "
        });
    }
  },
  mounted() {
    this.loadExperience();
  }
  // loadExperience() {
  //     ((state) => {
  //       axios.get('https://vue-http-f7291-default-rtdb.europe-west1.firebasedatabase.app/surveys.json').then(function (res) {
  //         state.results = res.data;
  //       });
  //     })(this);
  //   }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>