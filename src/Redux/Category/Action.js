import * as types from "../types";
import CategoryService from "../../API/Category";

export function getAllSuccess(data) {
  return { type: types.GET_ALL_CATEGORIES, data };
}

export function getAll() {
  return async function (dispatch) {
    const categoryData = await CategoryService.getAll();
    dispatch(getAllSuccess(categoryData.data));
  };
}
