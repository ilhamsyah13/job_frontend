import * as ActionType from "../constant/jobConstant";

const INIT_STATE = {
  jobs: [],
  job: [],
};

const JobReduce = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_JOB_REQUEST:
      return { ...state };
    case ActionType.GET_JOB_SUCCESS:
      return GetJobSuccessfully(state, action);
    case ActionType.FIND_JOB_REQUEST:
      return { ...state };
    case ActionType.FIND_JOB_SUCCESS:
      return FindJobSuccessfully(state, action);
    default:
      return { ...state };
  }
};

const GetJobSuccessfully = (state, action) => {
  return {
    ...state,
    jobs: action.payload,
  };
};

const FindJobSuccessfully = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    job: payload,
  };
};

export default JobReduce;
