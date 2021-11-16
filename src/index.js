import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux";
import Routers from "./routers";
import { ToastContainer } from "react-toastify"
import './App.css'
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <div className="App">
        <Routers />
        <ToastContainer />

      </div>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

