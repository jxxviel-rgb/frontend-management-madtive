import axios from "axios";
import { baseUrlApi } from "../../config/baseurl";

export default {
  namespaced: true,
  state() {
    return {
      projectCost: {},
      cost: {},
    };
  },
  mutations: {
    setStateProjectCost(state, value) {
      state.projectCost = value;
    },
    setStateCost(state, value) {
      state.cost = value;
    },
  },
  getters: {
    getStateProjectCost(state) {
      return state.projectCost;
    },
    getStateCost(state) {
      return state.cost;
    },
  },
  actions: {
    getDataProjectCost({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${baseUrlApi.defaults.baseURL}/configurations/projects/cost`)
          .then((res) => {
            commit("setStateProjectCost", res.data);
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    updateData({ commit }, data) {
      console.log(data);
      return new Promise((resolve, reject) => {
        axios
          .put(`${baseUrlApi.defaults.baseURL}/configurations/projects/cost/${data.id}`, {
            tax: data.tax,
            profit_team: data.profit_team,
            profit_company: data.profit_company,
          })
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    showData({ commit }, id) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${baseUrlApi.defaults.baseURL}/configurations/projects/cost/${id}`)
          .then((res) => {
            commit("setStateCost", res.data);
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
};
