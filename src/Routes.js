import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./components/HomePage/index";
import CounterHOC from "./containers/Counter"; // /Loadable
import ToDo from "./containers/ToDo";
import CounterSavedHOC from "./containers/CounterSaved";
import Item4 from "./components/Item4";
import Item5 from "./components/Item5";
import Item6 from "./components/Item6";
import Item7 from "./components/Item7";
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
      <Route path="/item4" component={Item4} />
      <Route path="/item5" component={Item5} />
      <Route path="/item6" component={Item6} />
      <Route path="/item7" component={Item7} />
      <Route path="" component={NotFoundPage} />


    </Switch>
  );
}
