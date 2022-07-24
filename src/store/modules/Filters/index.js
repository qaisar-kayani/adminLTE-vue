import mutations from "./mutations.js";
import getters from "./getters.js";
import actions from "./actions.js";

export default {
  namespace: true,
  state() {
    return {
        filters: {
            page: 1,
            perPage: process.env.VUE_APP_PER_PAGE ?? 10,
            search: null,
            startDate: null,
            endDate: null,
        },
    };
  },
  getters: getters,
  mutations: mutations,
  actions: actions,
};
