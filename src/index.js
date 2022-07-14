import React from "react";
// import { Fragment } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Store, { StorePersistor } from "./store/index";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
      <Provider store={Store}>
        <PersistGate loading={null} persistor={StorePersistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
