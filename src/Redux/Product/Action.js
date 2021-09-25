import * as types from "../types";
import ProductService from "../../API/Product";

export function getAllSuccess(data) {
  return { type: types.GET_ALL_PRODUCTS, data };
}

export function getAll() {
  return async function (dispatch) {
    const productData = await ProductService.getAll();
    dispatch(getAllSuccess(productData.data));
  };
}
