import axios from "axios";
import { baseUrlApi } from "../../config/baseurl";
export default {
  namespaced: true,
  state() {
    return {
      positions: {},
      position: {},
    };
  },
  mutations: {
    setPositionsState(state, value) {
      state.positions = value;
    },
    setPositionState(state, value) {
      state.position = value;
    },
  },
  getters: {
    getPositionsState(state) {
      return state.positions;
    },
    getPositionState(state) {
      return state.position;
    },
  },
  actions: {
    getAllPositions({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${baseUrlApi.defaults.baseURL}/positions`)
          .then((res) => {
            commit("setPositionsState", res.data);
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
          .post(`${baseUrlApi.defaults.baseURL}/positions`, {
            position_name: data.position_name,
          })
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    deletePosition({ commit }, id) {
      return new Promise((resolve, reject) => {
        axios
          .delete(`${baseUrlApi.defaults.baseURL}/positions/${id}`)
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
          .get(`${baseUrlApi.defaults.baseURL}/positions/${id}`)
          .then((res) => {
            commit("setPositionState", res.data);
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
          .put(`${baseUrlApi.defaults.baseURL}/positions/${data.id}`, { position_name: data.position_name })
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
