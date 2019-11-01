import React from "react";
import { Switch, Route } from "react-router-dom";
import ApartmentFull from "../features/apartmentFull/index";
import { Link, BrowserRouter as Router } from "react-router-dom";

export const Routes = () => {
  return (
    <Router>
      <Route path="/apart" component={ApartmentFull} />
    </Router>
  );
};

{
  /* <Switch>
      <Route path="/apartmani" component={ApartmentFull} />
  </Switch>*/
}
