import axiosInstance from "../axiosInstance";

const getAll = async () => {
  return await axiosInstance.get("/product");
};

const getProductsByfilters = async (category, colors, priceRange, currentPage) => {
  let Url = `/product?_page=${currentPage}&`;
  if (colors.length > 0) {
    const mappedColors = colors.map((color) => `color=${color}`).join("&");
    Url = Url + `${mappedColors}&`;
  }
  if (priceRange.length > 0) {
    let startRange = priceRange[0];
    let endRange = priceRange[1];

    Url = Url + `price_gte=${startRange}&price_lte=${endRange}&`;
  }
  if (category) {
    Url = Url + `categoryId=${category}&`;
  }
  return await axiosInstance.get(Url);
};

const obj = {
  getAll,
  getProductsByfilters,
};
export default obj;
