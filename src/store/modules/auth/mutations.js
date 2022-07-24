export default {
  loginUser(state, payload) {
    console.log(payload);
    state.authenticated = true;
    
    localStorage.setItem(
      "auth",
      JSON.stringify({
        authenticated: true,
        user:payload.data
      })
    );
    localStorage.setItem('accessToken',payload.data.token)
  },

  logout(state, payload) {
    localStorage.removeItem("auth");
    state.authenticated = false;
  },

  setAccessToken(state, payload) {
    state.accessToken = payload.data.token;
  },
  setFetchTimestamp(state) {
    state.lastFetch = new Date().getTime();
  },
  setAuthenticated(state, payload) {
    state.authenticated = payload;
  },
};
