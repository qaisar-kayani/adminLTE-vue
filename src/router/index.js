import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/pages/dashboard/index";
import Auth from "./Auth.js";

import VueRouteMiddleware from "vue-route-middleware";
import AuthMiddleware from "../middleware/Auth";
import Settings from "./Settings";
import service from "./Service"
import price from './Price'

let routes = [
  {
    name: "home",
    path: "/",
    component: Home,
    meta: { title: "Dashboard", middleware: [AuthMiddleware] },
  },
  {
    name: "/",
    path: "/",
    component: Home,
    meta: { title: "Home", middleware: [AuthMiddleware] },
  },
  ...Auth,
  ...Settings,
  ...service,
  ...price
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  base: process.env.BASE_URL,
  routes: routes,
});
// dynamic title
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});
router.beforeEach(VueRouteMiddleware({ AuthMiddleware }));
export default router;
