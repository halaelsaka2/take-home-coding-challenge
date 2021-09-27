import * as types from "../types";
import ProductService from "../../API/Product";

function getAllSuccess(data) {
  return { type: types.GET_ALL_PRODUCTS, data };
}

function getProductsByfiltersSuccess(data) {
  return { type: types.FILTER_PRODUCTS, data };
}
export function getAll() {
  return async function (dispatch) {
    const productData = await ProductService.getAll();
    dispatch(getAllSuccess(productData.data));
  };
}

export function getProductsByfilters(category, colors, priceRange, page) {
  return async function (dispatch) {
    const allProductWithFilter = await ProductService.getProductsByfilters(category, colors, priceRange, page);

    dispatch(
      getProductsByfiltersSuccess({
        products: allProductWithFilter.data,
        count: allProductWithFilter.headers["x-total-count"],
      })
    );
  };
}
export function savePriceRange(priceRange) {
  return { type: types.SAVE_PRICE_RANGE, data: priceRange };
}

export function saveColors(colors) {
  return { type: types.SAVE_COLORS, data: colors };
}

export function saveCurrentPage(id) {
  return { type: types.SAVE_CURRENT_PAGE, data: id };
}
