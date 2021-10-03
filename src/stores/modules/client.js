import axios from "axios";
import { baseUrlApi } from "../../config/baseurl";
export default {
  namespaced: true,
  state() {
    return {
      clients: {},
      client: {},
    };
  },
  mutations: {
    setClient(state, value) {
      state.clients = value;
    },
    setSpecificClient(state, value) {
      state.client = value;
    },
  },
  actions: {
    storeData({ commit }, client) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${baseUrlApi.defaults.baseURL}/clients`, {
            company_name: client.company_name,
            company_email: client.email,
            phone_number: client.phone_number,
            address: client.address,
          })
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    getAllData({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${baseUrlApi.defaults.baseURL}/clients`)
          .then((res) => {
            commit("setClient", res.data);
            resolve(res.data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    getSpecificClient({ commit }, id) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${baseUrlApi.defaults.baseURL}/clients/${id}`)
          .then((res) => {
            commit("setSpecificClient", res.data);
            resolve(res.data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    deleting({ commit }, id) {
      return new Promise((resolve, reject) => {
        axios
          .delete(`${baseUrlApi.defaults.baseURL}/clients/${id}`)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    updatingClient({ commit }, client) {
      return new Promise((resolve, reject) => {
        axios
          .put(`${baseUrlApi.defaults.baseURL}/clients/${client.id}`, {
            company_name: client.company_name,
            company_email: client.email,
            phone_number: client.phone_number,
            address: client.address,
          })
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
  getters: {
    getClientState(state) {
      return state.clients;
    },
    getSpecificClientState(state) {
      return state.client;
    },
  },
};
