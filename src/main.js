import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import vuetify from './plugins/vuetify'
import vueSmoothScroll from "vue2-smooth-scroll";

Vue.config.productionTip = false
Vue.use(vueSmoothScroll);

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
