import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
import store from './store/index.js'

Vue.config.productionTip = false;

Vue.use(VueResource)


new Vue({
    render: (h) => h(App),
    store,
    beforeCreate() {
        Vue.prototype.$bus = this;
    },
}).$mount("#app");
