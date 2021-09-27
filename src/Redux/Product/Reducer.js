import * as types from "../types";
import initialState from "../initialState";

export default function ProductReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.data,
        productsToView: action.data,
      };
    case types.FILTER_PRODUCTS:
      console.log(action.data);
      return {
        ...state,
        allProductWithFilter: action.data.products,
        productsCount: action.data.count,
      };
    case types.SAVE_COLORS:
      return {
        ...state,
        currentColors: action.data,
      };
    case types.SAVE_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.data,
      };
    case types.SAVE_PRICE_RANGE:
      return {
        ...state,
        currentPriceRange: action.data,
      };
    default:
      return state;
  }
}
