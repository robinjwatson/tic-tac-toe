import { combineReducers } from "redux";
import reducer from "./exampleReducer";

const reducers = combineReducers({
    example: reducer
});

export default reducers