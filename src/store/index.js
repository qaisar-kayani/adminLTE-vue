import { createStore } from "vuex";
import { globalHelpers } from "@/mixins/globalHelpers";
import authModule from "./modules/auth/index.js";
import dashboard from "./modules/dashboard/index.js";
import generalModule from "./modules/general/index.js";
import Bootstrap from "./modules/Bootstrap/index";
import Filters from "./modules/Filters";
import Settings from "./modules/Settings";
import notification from "./modules/notification/index.js";


const store = createStore({
  modules: {
    auth: authModule,
    Dashboard: dashboard,
    general: generalModule,
    notification: notification,
    Bootstrap,
    Filters,
    Settings,
  },
  mixins: {
    globalHelpers,
  },
});

export default store;
