import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://test-api.edfa3ly.io/",
});

export default axiosInstance;
