import axios from "axios";
import { baseUrlApi } from "../../config/baseurl";
export default {
  namespaced: true,
  state() {
    return {
      bills: {},
      bill: {},
    };
  },
  mutations: {
    setStateBills(state, value) {
      state.bills = value;
    },
    setStateBill(state, value) {
      state.bill = value;
    },
  },
  getters: {
    getStateBills(state) {
      return state.bills;
    },
    getStateBill(state) {
      return state.bill;
    },
  },
  actions: {
    getAllBills({ commit }) {
      return new Promise((resolve, reject) => {
        axios.get(`${baseUrlApi.defaults.baseURL}/`);
      });
    },
  },
};
