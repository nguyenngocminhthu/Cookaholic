import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux";
import "./index.css";
import Routers from "./routers";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <div className="App">
        <Routers />
      </div>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

