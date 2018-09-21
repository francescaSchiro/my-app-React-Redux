import React from 'react';
import ToDoWrapper from './ToDoWrapper';
import H1 from '../../components/H1';
import P from '../../components/P';

import {createStore} from 'redux';
import todoApp from './reducers';
import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from './actions'

const store = createStore(todoApp,
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
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

// Stop listening to updates
unsubscribe()


export default class ToDo extends React.Component{
  render() {
    return(
      <ToDoWrapper key = "ToDoWrapper">
        <H1> ToDo </H1>
        <div>
          <P>*put my todo list here*</P>
        </div>  
      </ToDoWrapper>
    );
  };
}
