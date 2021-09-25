import axiosInstance from "../axiosInstance";

const getAll = async () => {
  return await axiosInstance.get("/product");
};

const obj = { getAll };
export default obj;
