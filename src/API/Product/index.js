import axiosInstance from "../axiosInstance";

const getAll = async () => {
  return await axiosInstance.get("/product");
};
const getProductsByCategoryId = async (categoryId) => {
  return await axiosInstance.get(`/product?categoryId=${categoryId}&_page=1`);
};

const getProductsByPriceRange = async (rangeValues) => {
  if (rangeValues.length > 0) {
    let startRange = rangeValues[0];
    let endRange = rangeValues[1];
    return await axiosInstance.get(`/product?price_gte=${startRange}&price_lte=${endRange}&_page=1`);
  }
};

const getProductsByColors = async (colors) => {
  if (colors.length > 0) {
    const mappedColors = colors.map((color) => `color=${color}`).join("&");
    console.log(mappedColors, `/product?${mappedColors}`);
    return await axiosInstance.get(`/product?${mappedColors}`);
  }
};

const getProductsByfilters = async (category, colors, priceRange, currentPage) => {
  console.log(category, colors, priceRange, currentPage);
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
  console.log(Url);
  return await axiosInstance.get(Url);
};

const obj = {
  getAll,
  getProductsByCategoryId,
  getProductsByPriceRange,
  getProductsByColors,
  getProductsByfilters,
};
export default obj;
