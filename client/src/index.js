import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import "./assets/scss/argon-dashboard-react.scss";

// ### STORE ###
import { Provider as ReduxProvider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>,
  document.getElementById("root")
);
