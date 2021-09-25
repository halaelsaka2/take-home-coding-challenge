import axiosInstance from "../axiosInstance";

const getAll = async () => {
  return await axiosInstance.get("/category");
};

const obj = { getAll };
export default obj;
