import axios from "axios";
export const baseUrlApi = axios.create({ baseURL: "https://backend-madtive-management.herokuapp.com/public/api" });
