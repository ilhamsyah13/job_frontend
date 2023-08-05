import { takeEvery, all } from "redux-saga/effects";
import * as ActionJob from "../constant/jobConstant";
import * as ActionUser from "../constant/userConstant";

import { handleJob, findJob } from "./jobSaga";

import { handleSignin, handleSignout } from "./userSaga";

function* watchAll() {
  yield all([
    takeEvery(ActionJob.GET_JOB_REQUEST, handleJob),
    takeEvery(ActionJob.FIND_JOB_REQUEST, findJob),

    takeEvery(ActionUser.USER_SIGNIN_REQUEST, handleSignin),
    takeEvery(ActionUser.USER_SIGNOUT_REQUEST, handleSignout),
  ]);
}

export default watchAll;
