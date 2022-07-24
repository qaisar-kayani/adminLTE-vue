import mutations from "./mutations.js";
import getters from "./getters.js";
import actions from "./actions.js";

export default 
{
    namespace: true,
    state()
    {
        return {
            stores: {},
            allowedCurrencies: {},
            allowedPaymentMethods: {},
            isLoading: false,
            lastFetch: new Date().getTime(),
        }
    },
    getters: getters,
    mutations: mutations,
    actions: actions,
};