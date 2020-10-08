import { combineReducers } from "redux";

import {
  FETCH_POST_PENDING,
  FETCH_POST_FULFILLED,
  FETCH_POST_REJECTED
} from "./constants";

const initialState = {
  loading: false,
  post: null,
  error: null
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_PENDING:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_POST_FULFILLED:
      console.log("SSS", action.payload);
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload.data
      };
    case FETCH_POST_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
        data: null
      };
    default:
      return { ...state };
  }
};

export default combineReducers({
  post: postReducer
});
