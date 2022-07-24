import mutations from "./mutations.js";
import getters from "./getters.js";
import actions from "./actions.js";

export default {
    namespace: true,
    state() {
        return {
            apiPayments: {
                data: null,
                pagination: null,
                filters: null
            },
            refundAmount: null,
            description: null,
            partial: null,
            transactionId: null,
            refundResponse: null,
        };
    },
    getters: getters,
    mutations: mutations,
    actions: actions,
};
