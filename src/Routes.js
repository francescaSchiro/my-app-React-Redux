import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./components/HomePage/Loadable";
import CounterHOC from "./containers/Counter/Loadable";
import ToDo from "./containers/ToDo/Loadable";
import CounterSaved from "./components/CounterSaved";

export default function() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/item1" component={CounterHOC} />
      <Route path="/item2" component={CounterSaved} />
      <Route path="/item3" component={ToDo} />
      {/* <Route path="" component={NotFoundPage} /> */}
    </Switch>
  );
}
