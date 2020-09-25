import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from '@/plugins/vuetify' // path to vuetify export
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios)
Vue.use(Vuex)
new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
