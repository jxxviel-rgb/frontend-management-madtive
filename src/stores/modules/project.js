import axios from "axios";
import { baseUrlApi } from "../../config/baseurl.js";
export default {
  namespaced: true,
  state() {
    return {
      projects: {},
      project: {},
      tax: null,
      profit_team: null,
      profit_company: null,
      balanceTeamBudget: null,
    };
  },
  mutations: {
    setProjectsState(state, value) {
      state.projects = value;
    },
    setProjectState(state, value) {
      state.project = value;
    },
    setProfitTeam(state, value) {
      state.profit_team = value;
    },
    setProfitCompany(state, value) {
      state.profit_company = value;
    },
    setTax(state, value) {
      state.tax = value;
    },
    setBalanceTeamBudget(state, value) {
      state.balanceTeamBudget = value;
    },
  },
  getters: {
    getBalanceTeamBudget(state) {
      return state.balanceTeamBudget;
    },
    getProjectsState(state) {
      return state.projects;
    },
    getProjectState(state) {
      return state.project;
    },
    getProfitTeam(state) {
      return state.profit_team;
    },
    getProfitCompany(state) {
      return state.profit_company;
    },
    getTax(state) {
      return state.tax;
    },
  },
  actions: {
    getAllProjects({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${baseUrlApi.defaults.baseURL}/projects`)
          .then((res) => {
            commit("setProjectsState", res.data);
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
          .get(`${baseUrlApi.defaults.baseURL}/projects/${id}`)
          .then((res) => {
            commit("setProjectState", res.data);

            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    showForUpdate({ commit }, id) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${baseUrlApi.defaults.baseURL}/projects/show/${id}`)
          .then((res) => {
            commit("setProjectState", res.data);
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
          .post(`${baseUrlApi.defaults.baseURL}/projects`, {
            client_id: data.client_id,
            name: data.name,
            deadline: data.deadline,
            estimation: data.estimation,
            project_value: data.project_value,
            accomodation: data.accomodation,
            profit_team: data.profit_team,
            profit_company: data.profit_company,
            tax: data.tax,
            progres: data.progres,
            status: data.status,
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
          .put(`${baseUrlApi.defaults.baseURL}/projects/${data.id}`, {
            client_id: data.client_id,
            name: data.name,
            deadline: data.deadline,
            estimation: data.estimation,
            project_value: data.project_value,
            accomodation: data.accomodation,
            profit_team: data.profit_team,
            profit_company: data.profit_company,
            tax: data.tax,
            progres: data.progres,
            status: data.status,
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
          .delete(`${baseUrlApi.defaults.baseURL}/projects/${id}`)
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
