import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./plugins/element.js";
import "./assets/css/global.css"; // 引入全局样式
import "./assets/font/iconfont.css"; // 引入 iconfont 样式

import axios from "axios";

Vue.prototype.$http = axios;

// axios.defaults.baseURL = "http://localhost:9000";
axios.defaults.baseURL = "/api";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
