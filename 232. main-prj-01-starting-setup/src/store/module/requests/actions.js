export default {
  async contactCoach(context, payload) {
    const newRequest = {      
      userEmail: payload.email,
      message: payload.message,
    };
    const response = await fetch(
      `https://vue-http-demo-arif-default-rtdb.europe-west1.firebasedatabase.app/contacts/${payload.coachId}.json`,
      {
        method: 'POST',
        body: JSON.stringify(newRequest),
      }
    );
    const responseData = await response.json();
    
    newRequest.id= responseData.name;
    newRequest.coachId = payload.coachId;
    if (!response.ok) {
        const error = new Error(responseData.message || 'Failed to send request. ');
        throw error;
    }
    context.commit('addRequest', newRequest);
  },
  async loadcontact(context){
    const coachId = context.rootGetters.userId;
    const response = await fetch(
        `https://vue-http-demo-arif-default-rtdb.europe-west1.firebasedatabase.app/contacts/${coachId}.json`       
      );
      const responseData = await response.json(); 
      if (!response.ok) {
        const error = new Error(responseData.message || 'Failed to fetch.');
        throw error;
      }
      const messages =[];
      for(const key in responseData){
        const message = {
            id: key,
            coachId: coachId,
            userEmail: responseData[key].userEmail,
            message: responseData[key].message,
        };
        messages.push(message);
      }
      context.commit('setRequest',messages)
  }
};
