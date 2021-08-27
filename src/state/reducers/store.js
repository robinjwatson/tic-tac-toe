import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from "./index"

export const store = createStore(
    reducers, composeWithDevTools()
)