import axios from "axios";
import { baseUrlApi } from "../../config/baseurl";
export default {
  namespaced: true,
  state() {
    return {
      token: localStorage.getItem("token") || null,
      loggedIn: null,
      loginFailed: false,
    };
  },
  mutations: {
    setToken(state, value) {
      state.token = value;
    },
    setLoggedIn(state, value) {
      state.loggedIn = value;
    },
    setLoginFailed(state, value) {
      state.loggedIn = value;
    },
  },
  getters: {
    loggedIn(state) {
      return state.loggedIn;
    },
    token(state) {
      return state.token;
    },
  },
  actions: {
    retrieveToken({ commit }, credential) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${baseUrlApi.defaults.baseURL}/login`, {
            email: credential.email,
            password: credential.password,
          })
          .then((response) => {
            if (response.data.success) {
              const token = response.data.token;
              localStorage.setItem("token", token);
              commit("setToken", token);
              commit("setLoggedIn", true);
              resolve(response);
            }
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    loggedOut({ commit }, token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      return new Promise((resolve, reject) => {
        axios
          .post(`${baseUrlApi.defaults.baseURL}/logout`)
          .then((res) => {
            if (res) {
              localStorage.removeItem("token");
              commit("setToken", null);
              commit("setLoggedIn", false);
              resolve(res);
            }
          })
          .catch((err) => {
            if (err.status === 401) {
              localStorage.removeItem("token");
            }
            reject(err);
          });
      });
    },
    checkingToken({ commit, state }) {
      axios.defaults.headers.common.Authorization = `Bearer ${state.token}`;
      return new Promise((resolve, reject) => {
        axios
          .get(`${baseUrlApi.defaults.baseURL}/user`)
          .then((res) => {
            resolve(res);
            return res;
          })
          .catch((err) => {
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },
    registering({ commit }, data) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${baseUrlApi.defaults.baseURL}/register`, {
            name: data.name,
            email: data.email,
            password: data.password,
            password_confirmation: data.password_confirmation,
            phone_number: data.phone_number,
          })
          .then((res) => {
            if (res.data.success) {
              resolve(res);
            }
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    sendEmailVerification({ commit, state }) {
      axios.defaults.headers.common.Authorization = `Bearer ${state.token}`;
      return new Promise((resolve, reject) => {
        axios
          .get(`${baseUrlApi.defaults.baseURL}/email/resend`)
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
