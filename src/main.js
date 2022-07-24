import { createApp } from "vue";

import App from "./App.vue";
import axios from "axios";
import router from "./router";
import store from "./store";
import { globalHelpers } from "@/mixins/globalHelpers";
import { PanelHelper } from "@/mixins/PanelHelper";
import { config } from "@/config/config";
import { registerComponents } from "./config/globalComponents";
import VCalendar from 'v-calendar';
import Toast from "vue-toastification";
import loader from "vue-ui-preloader";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
const app = createApp(App).use(store);
app.config.globalProperties.$axios = axios;
app.use(router);
app.mixin(config);
app.mixin(globalHelpers);
app.mixin(PanelHelper);
app.use(VCalendar, {});
app.use(Toast);
app.use(loader)
// Register Gloabal Components
registerComponents(app);

app.mount("#app");
