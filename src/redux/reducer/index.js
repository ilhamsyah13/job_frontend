import { combineReducers } from "redux";
import JobReduce from "./jobReducer";
import UserReduce from "./userReducer";

const rootReducer = combineReducers({
  jobState: JobReduce,
  userState: UserReduce,
});

export default rootReducer;
