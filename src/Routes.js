import React from "react";
import { Switch, Route } from "react-router-dom";

import { PAGES } from "./pages";
import HomePage from "./components/HomePage";


export default function() {
  return (
    <Switch>
      <Route key={"homepage"} exact path={"/"} component={HomePage} />

      { PAGES.map( p => (
        <Route key={p.key} path={p.path} component={p.component} />
      ))}
      
    </Switch>
  );
}
