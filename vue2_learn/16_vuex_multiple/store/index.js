import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);

const actions = {
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
};
const mutations = {
    ADD(state, value) {
        state.sum += value;
    },
    SUB(state, value) {
        state.sum -= value;
    },
    ADD_PERSON(state, value) {
        state.personList.push(value)
    },
};
const state = {
    sum: 0,
    school: "UIB",
    subject: "Vue",
    personList: [
        {'id':'001',name:'Zechao'}
    ]
};

const getters = {
    bigSum(state) {
        return state.sum * 10;
    },
};
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters,
});
