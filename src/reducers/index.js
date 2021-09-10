// Bring in all of the reducers and combining them
import { combineReducers } from "redux";
import logReducer from "./logReducer";

// Send all here
export default combineReducers({
    log: logReducer
})