import Vue from "vue";
import "jquery";
import "popper.js";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/style.css";
import App from "./App.vue";
import router from "./router";
import AOS from "aos";
import "aos/dist/aos.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

library.add(faUserSecret);
library.add(faBars);
library.add(faHeart);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  created() {
    AOS.init({
      duration: 1500
    });
  },
  render: h => h(App)
}).$mount("#app");
