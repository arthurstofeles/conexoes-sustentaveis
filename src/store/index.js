import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    form: {},
    simulador: false,
    calc: {},
  },
  mutations: {
    SET_FORM(state, payload) {
      state.form = payload;
    },
    SET_SIMULADOR(state, payload) {
      state.simulador = payload;
    },
    SET_CALC(state, payload) {
      state.calc = payload;
    },
  },
  actions: {
    setForm(context, payload) {
      context.commit("SET_FORM", payload);
    },
    setSimulador(context, payload) {
      context.commit("SET_SIMULADOR", payload);
    },
    setCalc(context, payload) {
      context.commit("SET_CALC", payload);
    },
  },
});
