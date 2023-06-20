export default {
  async login(context, payload) {
    context.dispatch('auth',{...payload, mode: 'login'})
  },
  async signUp(context, payload) {
    context.dispatch('auth',{...payload,  mode: 'signUp'})
  },

  async auth(context,payload) {
    const mode = payload.mode;
    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA2T3OGLgT6akWMdf487jrilBkJAeeWwLk';
    if(mode==='signUp'){
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA2T3OGLgT6akWMdf487jrilBkJAeeWwLk';
    }
    const response = await fetch(url ,{
        method: 'POST',
        body: JSON.stringify({ email: payload.email,  password: payload.password, returnSecureToken: true}),
      }
    );
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(response.message || 'failed to authenticate.');
      throw error;
    }

    localStorage.setItem('token',responseData.idToken);
    localStorage.setItem('userId',responseData.localId);
    
    context.commit('setUser', { token: responseData.idToken, userId: responseData.localId,tokenExpiration: responseData.expiresIn });
  },
  tryLogin(context){
    const token =  localStorage.getItem('token');
    const userId =  localStorage.getItem('userId');
    if(token && userId){
      context.commit('setUser',{token: token,userId:userId, tokenExpiration:null})
    }
  },
  logout(context) {
    context.commit('setUser', {  userId: null, token: null, tokenExpiration: null });
  },
};
