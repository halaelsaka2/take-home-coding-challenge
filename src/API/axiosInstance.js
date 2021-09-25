import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "http://test-api.edfa3ly.io/",
});

// axiosInstance.interceptors.request.use((cfg) => {
//   cfg.headers["Accept"] = "application/json";
//   cfg.headers["Authorization"] = `auth ${localStorage.getItem("token")}`;
//   cfg.headers["unitCode"] = localStorage.getItem("unitCode");
//   return cfg;
// });

export default axiosInstance;
