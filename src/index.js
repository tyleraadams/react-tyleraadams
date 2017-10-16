import React from "react";
import ReactDOM from "react-dom";
// import App from './App';
import "./index.css";
import { browserHistory } from "react-router";

import App from "./containers/App/App";
import makeRoutes from "./routes";

const routes = makeRoutes();

const mountNode = document.getElementById("root");

ReactDOM.render(<App routes={routes} history={browserHistory} />, mountNode);
