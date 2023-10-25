import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () =>
      import(/* webpackChunkName: "HomeView" */ "@/views/HomeView.vue"),
  },
  // {
  //   path: "/admin",
  //   name: "DefaultLayout",
  //   component: () =>
  //     import(/* webpackChunkName: "DefaultLayout" */ "../layouts/DefaultLayout.vue"),
  // },
  // {
  //   path: "/login",
  //   name: "LoginView",
  //   component: () =>
  //     import(/* webpackChunkName: "LoginView" */ "../views/LoginView.vue"),
  // },
  // {
  //   path: "/recuperar-senha",
  //   name: "RecuperarSenhaView",
  //   component: () =>
  //     import(/* webpackChunkName: "RecuperarSenhaView" */ "../views/RecuperarSenhaView.vue"),
  // },
];

const router = new VueRouter({
  routes,
  mode: "history",
  base: process.env.BASE_URL,
});

export default router;
