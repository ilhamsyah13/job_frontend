import * as ActionType from "../constant/userConstant";

export const UserSigninRequest = (payload) => ({
  type: ActionType.USER_SIGNIN_REQUEST,
  payload,
});

export const UserSigninSuccess = (payload) => ({
  type: ActionType.USER_SIGNIN_SUCCESS,
  payload,
});

export const UserSigninFailed = (payload) => ({
  type: ActionType.USER_SIGNIN_FAILED,
  payload,
});

export const UserSignoutRequest = () => ({
  type: ActionType.USER_SIGNOUT_REQUEST,
});

export const UserSignoutSuccess = (payload) => ({
  type: ActionType.USER_SIGNOUT_SUCCESS,
  payload,
});

export const UserSignoutFailed = (payload) => ({
  type: ActionType.USER_SIGNOUT_FAILED,
  payload,
});
