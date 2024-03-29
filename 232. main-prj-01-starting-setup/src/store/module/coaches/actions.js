export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coachData = {
      id: context.rootGetters.userId,
      firstName: data.first,
      lastName: data.last,
      areas: data.areas,
      description: data.desc,
      hourlyRate: data.rate,
    };


    const token = context.rootGetters.token;
    const response = await fetch(
      `https://vue-http-demo-arif-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json?auth=`+ token,
      {
        method: 'PUT',
        body: JSON.stringify(coachData),
      }
    );
    // const responseData = await response.json();
    if (!response.ok) {
      //error
    }
    context.commit('registerCoach', { ...coachData, id: userId });
  },
  async loadCoaches(context, payload) {
    
    if(!payload.forceRefresh && !context.getters.shouldUpdate){      
      return true;
    }
    const response = await fetch(
      `https://vue-http-demo-arif-default-rtdb.europe-west1.firebasedatabase.app/coaches.json`
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch.');
      throw error;
    }

    const coaches = [];

    for(const key in responseData){
      const coach = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        areas: responseData[key].areas,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
      };
      coaches.push(coach);
    }
    context.commit('setCoaches',coaches);
    context.commit('setFetchTimeStamp');
  },
};
