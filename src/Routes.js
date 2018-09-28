import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./components/HomePage/index";
import CounterHOC from "./containers/Counter"; // /Loadable
import ToDo from "./containers/ToDo";
import CounterSaved from "./components/CounterSaved";
// import PAGES from "./pages";

// let routesToRender = PAGES.map((p, i) => (
//   <Route key={p.key} path={p.path} component={p.component} />
// ));

export default function() {
  return (
    <Switch>
       {/* {routesToRender} */}
      <Route exact path="/" component={HomePage} />
      <Route path="/item1" component={CounterHOC} />
      <Route path="/item2" component={CounterSaved} />
      <Route path="/item3" component={ToDo} />
      {/* <Route path="" component={NotFoundPage} /> */}
    </Switch>
  );
}
