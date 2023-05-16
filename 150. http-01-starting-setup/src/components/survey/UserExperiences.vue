<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperience">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading ...</p>
      <ul v-else>
        <survey-result v-for="result in results" :key="result.id" :name="result.name"
          :rating="result.rating"></survey-result>
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
      isLoading: false
    }
  },
  methods: {
    loadExperience() {
      this.isLoading = true;
      axios.get('https://vue-http-f7291-default-rtdb.europe-west1.firebasedatabase.app/surveys.json')
        .then((res) => {
          this.isLoading=false;
          for (const key in res.data) {
            this.results.push({
              id: key,
              name: res.data[key].name,
              rating: res.data[key].rating,
            })
          }
          // this.results = res.data;    
        })
        .catch(function (error) {
          console.log(error);
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