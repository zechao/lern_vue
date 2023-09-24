import Vue from "vue";
import App from "./App.vue";
import { createPinia, PiniaVuePlugin } from "pinia";
Vue.use(PiniaVuePlugin);
const pinia = createPinia();
import VueRouter from "vue-router";
import router from "./router";

Vue.config.productionTip = false;

Vue.use(VueRouter);

new Vue({
    render: (h) => h(App),
    pinia,
    router,
}).$mount("#app");
