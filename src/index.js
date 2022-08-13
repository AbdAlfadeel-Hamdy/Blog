import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { legacy_createStore, applyMiddleware } from "redux";
import App from "./components/App";
import thunk from "redux-thunk";
import reducers from "./reducers";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

const store = legacy_createStore(reducers, applyMiddleware(thunk));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
