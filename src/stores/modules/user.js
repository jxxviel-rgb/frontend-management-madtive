import axios from "axios";
import { baseUrlApi } from "../../config/baseurl";
export default {
  namespaced: true,
  state() {
    return {
      user: {},
      firstName: [],
    };
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setFirstName(state, value) {
      state.firstName = value;
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
              let firstName = res.data.employee.name.split(" ");
              commit("setFirstName", firstName);
              resolve(res.data);
            }
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
};
