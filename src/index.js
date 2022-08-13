import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { legacy_createStore } from "redux";
import App from "./components/App";
import Reducers from "./reducers";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <Provider store={legacy_createStore(Reducers)}>
    <App />
  </Provider>
);
