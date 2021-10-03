import axios from "axios";
export const baseUrlApi = axios.create({ baseURL: "127.0.0.1:8000/api" });
