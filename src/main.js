import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import * as serviceWorker from './serviceWorker';
// import Web3 from 'web3';
import vuetify from "./plugins/vuetify";
import axios from "./http/http.js";
import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";
Vue.use(mavonEditor);

// 将axios挂载到prototype上，在组件中可以直接使用this.axios访问
Vue.prototype.axios = axios;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
