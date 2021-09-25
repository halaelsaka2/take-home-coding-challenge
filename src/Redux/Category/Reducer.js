import * as types from "../types";
import initialState from "../initialState";

export default function CategoryReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_ALL_CATEGORIES:
      return {
        ...state,
        allCategories: action.data,
      };

    default:
      return state;
  }
}
