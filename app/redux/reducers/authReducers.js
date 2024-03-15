import * as type from "../types";
const initialState = {
  authToken: null,
  user: null,
  error: false,
  isLoading: false,
  message: null
};

export const authReducer = (state = initialState, action) => {
  // console.log('action', action.)
  switch (action.type) {
    case type.SET_LOGIN_INIT:
      return {
        ...state,
        authToken: null,
        user: null,
        error: false,
        isLoading: true,
        message: null
      };
    case type.SET_LOGIN_SUCCESS: 
     return {
        ...state,
        user: action.payload.user,
        authToken: action.payload.authToken,
        isLoading: false,
        error: false,
     }
    case type.SET_LOGIN_FAIL:
      return {
        ...state,
        authToken: null,
        user: null,
        error: true,
        isLoading: false,
        message: null
      };
    case type.SET_LOGOUT:
      return {
        ...state,
        authToken: null,
        user: null,
        error: false,
        isLoading: true,
        message: null
      };
    default:
      return state;
  }
};
