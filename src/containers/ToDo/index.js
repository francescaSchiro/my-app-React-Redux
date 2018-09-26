import React from 'react';

import ToDoWrapper from './ToDoWrapper';

import {Provider} from 'react-redux';
import TodoApp from './components/TodoApp'
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
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ALL))

// Stop listening to updates
unsubscribe()


export default class ToDo extends React.Component{
  render() {
    return(
      <Provider store={store}>
        <ToDoWrapper key = "ToDoWrapper">
          <TodoApp />
        </ToDoWrapper>
      </Provider>
    );
  };
}

// as in the tutorial, cause it's attatched to the root. but this is like a 'sub-app'
// render(
//   <Provider store={store}>
//     <TodoApp />
//   </Provider>,
//   document.getElementById('root')
// )



//----------------OLD PLACEHOLDER---------------------
// export default class ToDo extends React.Component{
//   render() {
//     return(
//       <ToDoWrapper key = "ToDoWrapper">
//         <H1> ToDo </H1>
//         <div>
//           <P>*put my todo list here*</P>
//         </div>  
//       </ToDoWrapper>
//     );
//   };
// }
