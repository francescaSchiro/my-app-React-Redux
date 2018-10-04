//store that is imported in App.js

import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import globalReducer from './reducers';
import mySaga from './containers/ToDo/saga';

// create a saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    globalReducer,
    // has to be below reducer!!!
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    // mount it on the Store
    applyMiddleware(sagaMiddleware),
    
    );

// then run the saga
sagaMiddleware.run(mySaga);

export default store;