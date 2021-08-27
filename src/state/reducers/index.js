import { combineReducers } from "redux";
import counterReducer from "./gameCountReducer";

const reducers = combineReducers({
    counter: counterReducer
});

export default reducers