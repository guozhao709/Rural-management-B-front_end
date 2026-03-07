import axios from "axios";

const http = axios.create({
  baseURL: "http://127.0.0.1:3000",
  timeout: 5000,
});

// 请求拦截器
http.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    const whiteList = ["/api/admin/login", "/api/admin/register"];

    if (!whiteList.includes(config.url) && token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default http;
