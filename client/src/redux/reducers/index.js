import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";
import graduateReducer from "./graduateReducer";

export default combineReducers({
  error: errorReducer,
  auth: authReducer,
  graduate: graduateReducer,
});
