import { call, put } from "redux-saga/effects";
import User from "../../api/user";
import Cookies from "js-cookie";
import {
  UserSigninFailed,
  UserSigninSuccess,
  UserSignoutFailed,
  UserSignoutSuccess,
} from "../action/userAction";

function* handleSignin(action) {
  const { payload } = action;
  try {
    const result = yield call(User.signin, payload);
    if (Object.keys(result.data).length === 0) {
      yield put(
        UserSigninFailed({ message: "user or password not match, try again" })
      );
    } else {
      Cookies.set("access-token", result.data.data.token);
      const profile = yield call(User.profile);
      Cookies.set("profile", JSON.stringify(profile.data));
      yield put(UserSigninSuccess(profile.data));
    }
  } catch (error) {
    yield put(UserSigninFailed("user or password not match, try again"));
  }
}

function* handleSignout() {
  try {
    Cookies.remove("access-token");
    Cookies.remove("profile");
    yield put(UserSignoutSuccess({ message: "Success Signout" }));
  } catch (error) {
    yield put(UserSignoutFailed(error));
  }
}

export { handleSignin, handleSignout };
