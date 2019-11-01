import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

//var destination = document.querySelector("#container");

import { Route, Link, BrowserRouter as Router } from "react-router-dom";

import ApartmentFull from "../src/features/apartmentFull/index";

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/apartModri/" component={ApartmentFull} />
      <Route path="/apartSmedji/" component={ApartmentFull} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
//ReactDOM.render(</App>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//component={() => <ApartmentFull myProp="Vrijednost" />}
