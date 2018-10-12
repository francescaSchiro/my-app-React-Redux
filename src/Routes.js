import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./components/HomePage/index";
import CounterHOC from "./containers/Counter"; // /Loadable
import ToDo from "./containers/ToDo";
import CounterSavedHOC from "./containers/CounterSaved";
import NotFoundPage from "./components/NotFoundPage/index";

// import PAGES from "./pages";

// let routesToRender = PAGES.map((p, i) => (
//   <Route key={p.key} path={p.path} component={p.component} />
// ));

export default function() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/item1" component={CounterHOC} />
      <Route path="/item2" component={CounterSavedHOC} />
      <Route path="/item3/:todosNum?" component={ToDo} />
      <Route path="" component={NotFoundPage} />
    </Switch>
  );
}
