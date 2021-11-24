import axios from "axios";
import { baseUrlApi } from "../../config/baseurl";
export default {
  namespaced: true,
  state() {
    return {
      teams: {},
      team: {},
      projectTeam: {},
    };
  },
  mutations: {
    setTeamsState(state, value) {
      state.teams = value;
    },
    setTeamState(state, value) {
      state.team = value;
    },
    setProjectTeamState(state, value) {
      state.projectTeam = value;
    },
  },
  getters: {
    getStateTeams(state) {
      return state.teams;
    },
    getStateTeam(state) {
      return state.team;
    },
    getStateProjectTeam(state) {
      return state.projectTeam;
    },
  },
  actions: {
    getAllTeams({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${baseUrlApi.defaults.baseURL}/teams`)
          .then((res) => {
            commit("setTeamsState", res.data);
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    getSpecificTeam({ commit }, id) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${baseUrlApi.defaults.baseURL}/teams/${id}`)
          .then((res) => {
            commit("setTeamState", res.data);
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    getSpecificProjectTeam({ commit }, id) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${baseUrlApi.defaults.baseURL}/projects/${id}/teams`)
          .then((res) => {
            commit("setProjectTeamState", res.data);
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
          .post(`${baseUrlApi.defaults.baseURL}/teams`, {
            project_id: data.project_id,
            employee_id: data.employee_id,
            position: data.position,
            fee: data.fee,
            payment_status: "PENDING",
          })
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    deleteMember({ commit }, id) {
      return new Promise((resolve, reject) => {
        axios
          .delete(`${baseUrlApi.defaults.baseURL}/teams/${id}`)
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
          .put(`${baseUrlApi.defaults.baseURL}/teams/${data.id}`, {
            project_id: data.project_id,
            employee_id: data.employee_id,
            position: data.position,
            fee: data.fee,
            payment_status: data.payment_status,
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
