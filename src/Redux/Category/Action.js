import * as types from "../types";
import CategoryService from "../../API/Category";

function getAllSuccess(data) {
  return { type: types.GET_ALL_CATEGORIES, data };
}

export function getAll() {
  return async function (dispatch) {
    const categoryData = await CategoryService.getAll();
    dispatch(getAllSuccess(categoryData.data));
  };
}

export function saveCategoryId(id) {
  return { type: types.SAVE_CATEGORY_ID, data: id };
}
