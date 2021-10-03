import axios from "axios";
import { baseUrlApi } from "../../config/baseurl";
export default {
  namespaced: true,
  state() {
    return {
      user: {},
    };
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
  },
  getters: {
    authenticatedUser(state) {
      return state.user;
    },
  },
  actions: {
    retrieveUserInfo({ commit }, token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      return new Promise((resolve, reject) => {
        axios
          .get(`${baseUrlApi.defaults.baseURL}/user`)
          .then((res) => {
            if (res) {
              commit("setUser", res.data);
              resolve(res.data);
              return res.data;
            }
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
};
