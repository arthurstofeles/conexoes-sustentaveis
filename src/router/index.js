import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () =>
      import(/* webpackChunkName: "HomeView" */ "@/views/HomeView.vue"),
  },
  {
    path: "/admin",
    name: "DefaultLayout",
    component: () =>
      import(/* webpackChunkName: "DefaultLayout" */ "../layouts/DefaultLayout.vue"),
      children: [
        {
          path: "/",
          name: 'IdeiaListView',
          component: () =>
            import(/* webpackChunkName: "IdeiaListView" */ "@/views/IdeiaListView.vue"),
        },
        {
          path: "ideia/:id",
          name: 'IdeiaDetailView',
          component: () =>
            import(/* webpackChunkName: "IdeiaDetailView" */ "@/views/IdeiaDetailView.vue"),
        },
        {
          path: "usuarios",
          name: 'CollaboratorListView',
          component: () =>
            import(/* webpackChunkName: "CollaboratorListView" */ "@/views/CollaboratorListView.vue"),
        },
        {
          path: "usuario/:id",
          name: 'CollaboratorDetailView',
          component: () =>
            import(/* webpackChunkName: "CollaboratorDetailView" */ "@/views/CollaboratorDetailView.vue"),
        }
      ]
  },
  {
    path: "/login",
    name: "LoginView",
    component: () =>
      import(/* webpackChunkName: "LoginView" */ "../views/LoginView.vue"),
  },
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
