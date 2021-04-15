import {
  LOGIN_DONE,
  LOGIN_FAIL, LOGIN_REQ,



  LOGOUT_DONE,
  LOGOUT_FAIL, LOGOUT_REQ,


  VERIFY_REQ,
  VERIFY_SUCC
} from "./ActionCreator";

const initialState = {
  isLoggingIn: false,
  isLoggingOut: false,
  isVerify: false,
  isLoginError: false,
  logoutError: false,
  isAuthenticated: false,
  user: {},
};

export const Reducer = (state = initialState, { type, payload }) => {
  console.log(type);
  switch (type) {
    case LOGIN_REQ:
      return { ...state, isLoggingIn: true, isLoginError: false };
    case LOGIN_DONE:
      //  console.log(payload);
      return { ...state, isLoggingIn: true, isAuthenticated: true, user: payload };
    case LOGIN_FAIL:
      return { ...state, isLoggingIn: false, isLoginError: true, isAuthenticated: false };
    case LOGOUT_REQ:
      return { ...state, isLoggingIn: false, logoutError: false };
    case LOGOUT_DONE:
      return { ...state, isLoggingOut: false, isAuthenticated: false, user: {} };
    case LOGOUT_FAIL:
      return { ...state, isLoggingOut: false, isLoginError: true };
    case VERIFY_REQ:
      return { ...state, isAuthenticated: false, isVerify: true };
    case VERIFY_SUCC:
      return { ...state, isVerify: false };
    default:
      return state;
  }
};
