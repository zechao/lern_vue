import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
import store from './store/index.js'
import { createPinia, PiniaVuePlugin } from 'pinia'
Vue.use(PiniaVuePlugin)
const pinia = createPinia()

Vue.config.productionTip = false;

Vue.use(VueResource)


new Vue({
    render: (h) => h(App),
    store,
    beforeCreate() {
        Vue.prototype.$bus = this;
    },
    pinia,
}).$mount("#app");
