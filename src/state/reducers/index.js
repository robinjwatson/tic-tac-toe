import { combineReducers } from "redux";
import gameCountReducer from "./gameCountReducer";
import statusReducer from "./statusReducer";

const reducers = combineReducers({
    gameCount: gameCountReducer,
    statusReducer: statusReducer,

});

export default reducers