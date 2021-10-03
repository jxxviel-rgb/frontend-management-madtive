import axios from "axios";
import { baseUrlApi } from "../../config/baseurl";
export default {
    namespaced: true,
    state() {
        return {
            pic: {},
            pics: {},
        };
    },
    mutations: {
        setStatePic(state, value) {
            state.pic = value;
        },
        setStatePics(state, value) {
            state.pics = value;
        },
    },
    getters: {
        getStatePic(state) {
            return state.pic;
        },
        getStatePics(state) {
            return state.pics;
        },
    },
    actions: {
        getAllData({ commit }) {
            return new Promise((resolve, reject) => {
                axios
                    .get(`${baseUrlApi.defaults.baseURL}/pics`)
                    .then((res) => {
                        commit("setStatePics", res.data);
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
                    .post(`${baseUrlApi.defaults.baseURL}/pics`, {
                        client_id: data.client_id,
                        name: data.name,
                        email: data.email,
                        phone_number: data.phone_number,
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
                    .put(`${baseUrlApi.defaults.baseURL}/pics/${data.id}`, {
                        client_id: data.client_id,
                        name: data.name,
                        email: data.email,
                        phone_number: data.phone_number,
                    })
                    .then((res) => {
                        resolve(res);
                    })
                    .catch((err) => {
                        reject(err);
                    });
            });
        },
        deleteData({ commit }, id) {
            return new Promise((resolve, reject) => {
                axios
                    .delete(`${baseUrlApi.defaults.baseURL}/pics/${id}`)
                    .then((res) => {
                        resolve(res);
                    })
                    .catch((err) => {
                        reject(err);
                    });
            });
        },
        specificPic({ commit }, id) {
            return new Promise((resolve, reject) => {
                axios
                    .get(`${baseUrlApi.defaults.baseURL}/pics/${id}`)
                    .then((res) => {
                        commit("setStatePic", res.data);
                        resolve(res);
                    })
                    .catch((err) => {
                        reject(err);
                    });
            });
        },
    },
};
