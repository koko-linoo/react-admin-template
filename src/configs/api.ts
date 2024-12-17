import axios, { InternalAxiosRequestConfig } from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {},
});

api.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
