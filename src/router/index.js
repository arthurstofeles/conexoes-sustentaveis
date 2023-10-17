import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () =>
      import(/* webpackChunkName: "HomeView" */ "@/views/HomeView.vue"),
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
  base: process.env.BASE_URL,
});

export default router;
