import mutations from "./mutations.js";
import getters from "./getters.js";
import actions from "./actions.js";

export default 
{
    // Important consideration
    namespace: true,
    state()
    {   
        var sessionAuth = JSON.parse(localStorage.auth ?? '{"authenticated":false,"user":{}}' );
        return {
            authenticated: sessionAuth.authenticated,
            email: sessionAuth.email,
            accessToken: null,
            user: sessionAuth.user,
        }
    },
    getters: getters,
    mutations: mutations,
    actions: actions,
};