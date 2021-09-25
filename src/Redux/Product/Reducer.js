import * as types from "../types";
import initialState from "../initialState";

export default function ProductReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.data,
      };

    default:
      return state;
  }
}
