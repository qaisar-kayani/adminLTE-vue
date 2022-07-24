import mutations from "./mutations.js";
import getters from "./getters.js";
import actions from "./actions.js";

export default 
{
    // Important consideration
    namespace: true,

    state()
    {
        return {
            notifications: {},
            totalNotifications: 0,
            toasts: [
                // {
                //     type: "error",
                //     message: "You have successfully warned!",
                //     position: "right_btm"
                // }
            ]
        }
    },
    getters: getters,
    mutations: mutations,
    actions: actions,
};