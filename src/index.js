import React from "react";
import ReactDOM from "react-dom";
import { ConnectedRouter } from "connected-react-router";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { store, history } from "./store";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history= { history }> 
        <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

if (module.hot) {
  module.hot.accept();
}
