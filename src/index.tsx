import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/Game';
import * as serviceWorker from './serviceWorker';
import './index.css';
import { Provider } from "react-redux";
import { store } from "./state/reducers/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Game />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
