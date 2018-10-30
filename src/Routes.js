import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./components/HomePage/index";
import CounterHOC from "./containers/Counter"; // /Loadable
import ToDo from "./containers/ToDo";
import CounterSavedHOC from "./containers/CounterSaved";
import TicTacToe from "./containers/TicTacToe/index";
import Item5 from "./containers/Item5/index";
import Parallax from "./containers/Parallax/index";
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
      <Route path="/counter" component={CounterHOC} />
      <Route path="/reset" component={CounterSavedHOC} />
      <Route path="/todolist/:todosNum?" component={ToDo} />
      <Route path="/tictactoe" component={TicTacToe} />
      <Route path="/item5" component={Item5} />
      <Route path="/parallax" component={Parallax} />
      <Route path="/item7" component={Item7} />
      <Route path="" component={NotFoundPage} />


    </Switch>
  );
}
