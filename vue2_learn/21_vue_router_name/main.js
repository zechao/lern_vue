import Vue from "vue";
import App from "./App.vue";
import { createPinia, PiniaVuePlugin } from "pinia";

import VueRouter from "vue-router";
import router from "./router";

Vue.config.productionTip = false;

Vue.use(VueRouter);

Vue.use(PiniaVuePlugin);
const pinia = createPinia();

new Vue({
    render: (h) => h(App),
    pinia,
    router,
}).$mount("#app");
