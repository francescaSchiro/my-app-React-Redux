//store that is imported in App.js

import {createStore} from 'redux';
import globalReducer from './reducers';

const store = createStore(globalReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store