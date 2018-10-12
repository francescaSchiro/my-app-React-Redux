//store that is imported in App.js

import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import { createBrowserHistory } from "history";
import { connectRouter, routerMiddleware } from "connected-react-router";

import globalReducer from "./reducers";
import mySaga from "./containers/ToDo/saga";
import watchIncrementDelay from "./containers/Counter/saga";

// create a saga middleware
const sagaMiddleware = createSagaMiddleware();

// dev tools middleware
const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

//create a history object
export const history = createBrowserHistory();
// Wrap the root reducer with connectRouter and supply the history object to get a new root reducer.
// Use routerMiddleware(history) if you want to dispatch history actions
// (e.g. to change URL with push('/path/to/somewhere')).

export const store = createStore(
  connectRouter(history)(globalReducer), // new root reducer with router state
  // compose all the middlewares
  compose(
    applyMiddleware(
      routerMiddleware(history), // for dispatching history actions
      sagaMiddleware
    ),
    reduxDevTools
  )
);

// run the saga (mySaga that is the WatcherSaga: so that it can trigger the workerSaga when there’s an API_CALL_REQUEST )
sagaMiddleware.run(mySaga);
sagaMiddleware.run(watchIncrementDelay);