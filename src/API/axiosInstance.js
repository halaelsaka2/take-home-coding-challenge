import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "http://test-api.edfa3ly.io/",
});

export default axiosInstance;
