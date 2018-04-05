import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { sync } from "vuex-router-sync";

Vue.config.productionTip = false;
Vue.use(Vuex);
sync(store, router, { moduleName: "Route" });

// new Vue({
//   render: h => h(App)
// }).$mount('#app')

new Vue({
  el: "#app",
  router,
  store,
  template: "<App/>",
  components: { App }
});

// import Vue from "vue";
// import App from "./App.vue";

// new Vue({
//   el: "#app",
//   render: (h) => h(App)
// });
