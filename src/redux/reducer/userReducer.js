import * as ActionType from "../constant/userConstant";
import Cookies from "js-cookie";

const getFromCookies = (key) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return Cookies.get(key);
};

const INIT_STATE = {
  UserProfile: getFromCookies("profile")
    ? JSON.parse(Cookies.get("profile"))
    : null,
  isLogged: true,
};

const UserReduce = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.USER_SIGNIN_REQUEST:
      return state;
    case ActionType.USER_SIGNIN_FAILED:
      return UserSigninFailed(state, action);
    case ActionType.USER_SIGNIN_SUCCESS:
      return UserSignin(state, action);
    case ActionType.USER_SIGNOUT_REQUEST:
      return state;
    case ActionType.USER_SIGNOUT_SUCCESS:
      return UserSignout(state, action);
    default:
      return state;
  }
};

const UserSignin = (state, action) => {
  return {
    ...state,
    UserProfile: action.payload,
    isLogged: true,
  };
};

const UserSigninFailed = (state, action) => {
  return {
    ...state,
    isLogged: false,
  };
};

const UserSignout = (state, action) => {
  return {
    ...state,
    UserProfile: null,
    isLogged: true,
  };
};

export default UserReduce;
