import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);

const countOptions = {
    namespaced: true,
    actions: {
        add: function (context, value) {
            context.commit("ADD", value);
        },
        sub: function (context, value) {
            context.commit("SUB", value);
        },
        addOdd: function (context, value) {
            if (context.state.sum % 2 == 1) {
                context.commit("ADD", value);
            }
        },
        addWait: function (context, value) {
            setTimeout(() => {
                context.commit("ADD", value);
            }, 500);
        },
    },
    mutations: {
        ADD(state, value) {
            state.sum += value;
        },
        SUB(state, value) {
            state.sum -= value;
        },
    },
    state: {
        sum: 0,
        school: "UIB",
        subject: "Vue",
    },
    getters: {
        bigSum(state) {
            return state.sum * 10;
        },
    },
};

const personOptions = {
    namespaced: true,
    actions: {},
    mutations: {
        ADD_PERSON(state, value) {
            state.personList.push(value);
        },
    },
    state: {
        personList: [{ id: "001", name: "Zechao" }],
    },
    getters: {},
};

export default new Vuex.Store({
    modules: {
        countOptions,
        personOptions,
    },
});
