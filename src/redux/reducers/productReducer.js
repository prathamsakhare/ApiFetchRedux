import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [],
};
export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, actions) => {
  switch (actions.type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...actions.payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {...state};
    default:
      return state;
  }
};
