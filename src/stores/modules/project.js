import axios from "axios";
import { baseUrlApi } from "../../config/baseurl.js";
import moment from "moment";
import "moment/locale/id";
export default {
  namespaced: true,
  state() {
    return {
      projects: {},
      project: {},
      projectShow: {},
      tax: null,
      profit_team: null,
      profit_company: null,
      balanceTeamBudget: null,
      monthlyProjects: {},
    };
  },
  mutations: {
    setMonthlyProjectsState(state, value) {
      state.monthlyProjects = value;
    },
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
    setProjectShowState(state, value) {
      state.projectShow = value;
    },
  },
  getters: {
    getBalanceTeamBudget(state) {
      return state.balanceTeamBudget;
    },
    getProjectsState(state) {
      return state.projects;
    },
    getMonthlyProjectsState(state) {
      return state.monthlyProjects;
    },
    getProjectState(state) {
      return state.project;
    },
    getProjectShowState(state) {
      return state.projectShow;
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
            commit("setProjectShowState", res.data);
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
            // moment.locale("id");
            // res.data.data.deadline = moment(new Date(res.data.data.deadline)).format("LL");
            commit("setProjectState", res.data);
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    storeData({ commit }, data) {
      data;
      return new Promise((resolve, reject) => {
        axios
          .post(`${baseUrlApi.defaults.baseURL}/projects`, {
            client_id: data.client_id,
            pic_id: data.pic_id,
            name: data.name,
            start_project: data.start_project,
            deadline: data.deadline,
            estimation: data.estimation,
            project_value: data.project_value,
            accomodation: data.accomodation,
            profit_team: data.profit_team,
            profit_company: data.profit_company,
            tax: data.tax,
            monthly_fee: data.monthly_fee,
            status: data.status,
            type: data.type,
            addTax: data.addTax,
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
            pic_id: data.pic_id,
            name: data.name,
            start_project: data.start_project,
            deadline: data.deadline,
            estimation: data.estimation,
            project_value: data.project_value,
            accomodation: data.accomodation,
            profit_team: data.profit_team,
            profit_company: data.profit_company,
            monthly_fee: data.monthly_fee,
            tax: data.tax,
            type: data.type,
            status: data.status,
            addTax: data.addTax,
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
    paginate({ commit }, url) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${url}`)
          .then((res) => {
            commit("setProjectsState", res.data);
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    monthlyProjects({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${baseUrlApi.defaults.baseURL}/reminders`)
          .then((res) => {
            commit("setMonthlyProjectsState", res.data);
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
};
