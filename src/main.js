import Vue from "vue";
import App from "./App.vue";
import router from "@/router.js";
import { getMovies } from "@/api.js";
import { MotionPlugin } from "@vueuse/motion";
import store from "@/store";

Vue.config.productionTip = false;

Vue.prototype.$getMovies = getMovies;

Vue.use(MotionPlugin);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
