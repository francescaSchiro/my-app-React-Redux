//store that is imported in App.js

import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import globalReducer from "./reducers";
import mySaga from "./containers/ToDo/saga";
import watchIncrementDelay from "./containers/Counter/saga";
// create a saga middleware
const sagaMiddleware = createSagaMiddleware();

// dev tools middleware
const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  globalReducer,
  // compose all the middlewares
  compose(
    applyMiddleware(sagaMiddleware),
    reduxDevTools
  )
);

// run the saga (mySaga that is the WatcherSaga: so that it can trigger the workerSaga when there’s an API_CALL_REQUEST )
sagaMiddleware.run(mySaga);
sagaMiddleware.run(watchIncrementDelay);

export default store;
