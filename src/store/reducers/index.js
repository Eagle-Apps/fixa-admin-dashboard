import { combineReducers } from "redux";
import authReducer from "./auth";
import notificationReducer from "./notificationReducer";
import userProfile from "./client";
import staff from "./staff";

const appReducer = combineReducers({
  client: userProfile,
  staff: staff,
  auth: authReducer,
  notification: notificationReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT") return appReducer(undefined, action);
  return appReducer(state, action);
};
export default rootReducer;
