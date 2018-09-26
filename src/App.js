import React from 'react';
import {Helmet} from 'react-helmet';
import Header from './components/Header/index';
import CounterHOC from './containers/Counter/Loadable';
import ToDo from './containers/ToDo/Loadable';
import AppWrapper from './AppWrapper';
import HomePage from './components/HomePage/Loadable';

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import CounterSaved from './components/CounterSaved';
//store imports
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import globalReducer from './reducers';
import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from './containers/ToDo/actions'

const store = createStore(globalReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

// Log initial state
console.log(store.getState())

// Everytime the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe( () => 
  console.log(store.getState())
)

// Dispatch some actions

store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ALL))

// Stop listening to updates
unsubscribe()


export default function App() {
  return(
    <Provider store={store}>
      <AppWrapper key= "AppWrapper">
        <Helmet
          titleTemplate="%s - this is my practice app"
          defaultTitle= "my practice app"
        >
          <meta name="description:some React Boilerplate exercises" content="React exercises" />      
        </Helmet>
        <Header/>
        {/* <ExerciseWrapper> */}
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/item1" component={CounterHOC} />
            <Route path="/item2" component={CounterSaved} />
            <Route path="/item3" component={ToDo} />

            {/* <Route path="" component={NotFoundPage} /> */}
          </Switch>
        </Router>
        
          {/* <Counter initialValue = {0}/>
          <HomePage/> */}
        {/* </ExerciseWrapper> */}
      </AppWrapper>
    </Provider>  
  );
}
