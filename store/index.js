import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0,
        obj: {},
    },
    getters: {
        count: (state) => {
            return state.count;
        },
        getObjById: (state) => (id) => {
            return state.obj[id];
        },
    },
    mutations: {
        addObj(state, value) {
            state.obj[value.id] = value.list;
        },
        increment(state) {
            state.count++;
        },
    },
});

store.commit("increment");

export default store;
