import axios from "axios";
import { baseUrlApi } from "../../config/baseurl";

export default {
  namespaced: true,
  state() {
    return {
      costs: {},
      cost: {},
    };
  },
  mutations: {
    setStateCosts(state, value) {
      state.costs = value;
    },
    setStateCost(state, value) {
      state.cost = value;
    },
  },
  getters: {
    getStateCosts(state) {
      return state.costs;
    },
    getStateCost(state) {
      return state.cost;
    },
  },
  actions: {
    getAllData({ commit }, id) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${baseUrlApi.defaults.baseURL}/projects/${id}/addl_costs`)
          .then((res) => {
            commit("setStateCosts", res.data);
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    storeData({ commit }, data) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${baseUrlApi.defaults.baseURL}/addl_costs`, {
            project_id: data.project_id,
            category: data.category,
            cost: data.cost,
            description: data.description,
            type: data.type,
          })
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    updateData({ commit }, data) {
      return new Promise((resolve, reject) => {
        axios
          .put(`${baseUrlApi.defaults.baseURL}/addl_costs/${data.id}`, {
            project_id: data.project_id,
            category: data.category,
            cost: data.cost,
            description: data.description,
            type: data.type,
          })
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    show({ commit }, id) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${baseUrlApi.defaults.baseURL}/addl_costs/${id}`)
          .then((res) => {
            commit("setStateCost", res.data);
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    deleteData({ commit }, id) {
      return new Promise((resolve, reject) => {
        axios
          .delete(`${baseUrlApi.defaults.baseURL}/addl_costs/${id}`)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
};
