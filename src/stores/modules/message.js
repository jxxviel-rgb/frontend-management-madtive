import axios from "axios";
import { baseUrlApi } from "../../config/baseurl";
export default {
  namespaced: true,
  state() {
    return {
      messageHistories: {},
      messages: {},
      message: {},
      messageIsUsed: {},
    };
  },
  mutations: {
    setStateMessageHistories(state, value) {
      state.messageHistories = value;
    },
    setStateMessages(state, value) {
      state.messages = value;
    },
    setStateMessage(state, value) {
      state.message = value;
    },
    setStateMessageIsUsed(state, value) {
      state.messageIsUsed = value;
    },
  },
  getters: {
    getStateMessageHistories(state) {
      return state.messageHistories;
    },
    getStateMessage(state) {
      return state.message;
    },
    getStateMessages(state) {
      return state.messages;
    },
    getStateMessageIsUsed(state) {
      return state.messageIsUsed;
    },
  },
  actions: {
    getAllData({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${baseUrlApi.defaults.baseURL}/messages/logs`)
          .then((res) => {
            commit("setStateMessageHistories", res.data);
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    previousPage({ commit }, previousPageUri) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${baseUrlApi.defaults.baseURL}/messages/logs`, {
            params: {
              page: previousPageUri,
            },
          })
          .then((res) => {
            commit("setStateMessageHistories", res.data);
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    nextPage({ commit }, nextPageUri) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${baseUrlApi.defaults.baseURL}/messages/logs`, {
            params: {
              page: nextPageUri,
            },
          })
          .then((res) => {
            commit("setStateMessageHistories", res.data);
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
          .get(`${baseUrlApi.defaults.baseURL}/configurations/messages/${id}`)
          .then((res) => {
            commit("setStateMessage", res.data);
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
          .post(`${baseUrlApi.defaults.baseURL}/configurations/messages`, {
            code: data.code,
            message: data.message,
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
          .put(`${baseUrlApi.defaults.baseURL}/configurations/messages/${data.id}`, {
            code: data.code,
            message: data.message,
          })
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    delete({ commit }, id) {
      return new Promise((resolve, reject) => {
        axios
          .delete(`${baseUrlApi.defaults.baseURL}/configurations/messages/${id}`)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    getAllMessages({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${baseUrlApi.defaults.baseURL}/configurations/messages`)
          .then((res) => {
            commit("setStateMessages", res.data);
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    getMessageIsUsed({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${baseUrlApi.defaults.baseURL}/configurations/messages?isUsed=1`)
          .then((res) => {
            commit("setStateMessageIsUsed", res.data);
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    updateMessageIsUsed({ commit }, data) {
      return new Promise((resolve, reject) => {
        axios
          .put(`${baseUrlApi.defaults.baseURL}/configurations/messages/${data.id}`, {
            isUsedOnly: data.isUsedOnly,
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
};
