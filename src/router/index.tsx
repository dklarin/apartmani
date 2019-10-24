import React from "react";
import { Switch, Route } from "react-router-dom";

import TodoList from "../features";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/lines" component={TodoList} />
    </Switch>
  );
};
