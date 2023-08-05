import * as ActionJob from "../constant/jobConstant";

export const GetJobRequest = (payload) => ({
  type: ActionJob.GET_JOB_REQUEST,
  payload,
});

export const GetJobSuccess = (payload) => ({
  type: ActionJob.GET_JOB_SUCCESS,
  payload,
});

export const GetJobFailed = (payload) => ({
  type: ActionJob.GET_JOB_FAILED,
  payload,
});

export const FindJobRequest = (payload) => ({
  type: ActionJob.FIND_JOB_REQUEST,
  payload,
});

export const FindJobSuccess = (payload) => ({
  type: ActionJob.FIND_JOB_SUCCESS,
  payload,
});

export const FindJobFailed = (payload) => ({
  type: ActionJob.FIND_JOB_FAILED,
  payload,
});
