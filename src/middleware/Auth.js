import store from "../store";
export default (to, from, next) => 
{
    var auth = JSON.parse((localStorage.auth && localStorage.auth !=''?localStorage.auth:'{"authenticated":false}'));
    if( auth.authenticated == true && auth.user)
    {
        next();
    }
    else
    {    
        store.dispatch("logout", {})
        next({ name: "Login" });
    }
};
