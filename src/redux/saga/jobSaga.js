import { call, put } from "redux-saga/effects";
import Job from "../../api/job";
import {
  GetJobSuccess,
  GetJobFailed,
  FindJobSuccess,
  FindJobFailed,
} from "../action/jobAction";

function* handleJob(action) {
  const { payload } = action;
  try {
    const result = yield call(Job.list, payload);
    yield put(GetJobSuccess(result));
  } catch (error) {
    yield put(GetJobFailed(error));
  }
}

function* findJob(action) {
  const { payload } = action;
  try {
    const result = yield call(Job.findOne, payload);
    yield put(FindJobSuccess(result));
  } catch (error) {
    yield put(FindJobFailed(error));
  }
}

export { handleJob, findJob };
