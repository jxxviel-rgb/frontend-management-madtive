import axios from "axios";
import { baseUrlApi } from "../../config/baseurl";
import moment from "moment";
import "moment/locale/id";
export default {
  namespaced: true,
  state() {
    return {
      employees: {},
      employee: {},
    };
  },
  mutations: {
    setEmployees(state, payload) {
      state.employees = payload;
    },
    setEmployeeState(state, value) {
      state.employee = value;
    },
  },
  getters: {
    getEmployees(state) {
      return state.employees;
    },
    getEmployeeState(state) {
      return state.employee;
    },
  },
  actions: {
    async getEmployees({ commit }) {
      return await axios
        .get(`${baseUrlApi.defaults.baseURL}/employees`)
        .then((response) => {
          if (response.data.success) {
            moment.locale("id");
            for (let i = 0; i < response.data.data.length; i++) {
              response.data.data[i].employee.join_date = moment(response.data.data[i].employee.join_date).format("DD/MM/YYYY");
            }
            console.log(response.data);
            commit("setEmployees", response.data);
            return response.data;
          }
          // resolve(response);
        })
        .catch((error) => {
          // reject(error);
          return error;
        });
    },
    storeData({ commit }, data) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${baseUrlApi.defaults.baseURL}/employees`, {
            email: data.email,
            password: data.password,
            role: data.role,
            position_id: data.position_id,
            phone_number: data.phone_number,
            name: data.name,
            address: data.address,
            salary: data.salary,
            join_date: data.join_date,
            nik: data.nik,
            gender: data.gender,
            last_education: data.last_education,
            accountRecuired: data.accountRecuired,
          })
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    getSpecificEmployee({ commit }, id) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${baseUrlApi.defaults.baseURL}/employees/${id}`)
          .then((res) => {
            commit("setEmployeeState", res.data);
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    updateData({ commit }, data) {
      console.log(data);
      return new Promise((resolve, reject) => {
        axios
          .put(`${baseUrlApi.defaults.baseURL}/employees/${data.id}`, {
            email: data.email,
            role: data.role,
            position_id: data.position_id,
            name: data.name,
            phone_number: data.phone_number,
            address: data.address,
            salary: data.salary,
            join_date: data.join_date,
            nik: data.nik,
            gender: data.gender,
            last_education: data.last_education,
            accountRequired: data.accountRequired,
          })
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    deleteEmployee({ commit }, id) {
      return new Promise((resolve, reject) => {
        axios
          .delete(`${baseUrlApi.defaults.baseURL}/employees/${id}`)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    getEmployeeProjects({ commit }, data) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${baseUrlApi.defaults.baseURL}/employees/projects`, {
            ids: data,
          })
          .then((res) => {
            commit("setEmployees", res.data);
            resolve(res);
          })
          .catch((res) => {
            reject(err);
          });
      });
    },
  },
};
