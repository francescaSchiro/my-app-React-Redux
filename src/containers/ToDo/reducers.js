import { combineReducers } from "redux";
import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  SET_FILTER_SHOW_ALL,
  SET_FILTER_SHOW_ACTIVE,
  SET_FILTER_SHOW_COMPLETED,
  FETCH_SUCCESS,
  FETCH_FAIL
} from "./actions";
import { newTodoDB, removeTodoDB } from '../../api';

import filters from "./filters";

function visibilityFilter(state = filters.ALL, action) {
  switch (action.type) {
    case SET_FILTER_SHOW_ALL: {
      const { filter } = action.payload;
      return filter;
    }
    case SET_FILTER_SHOW_ACTIVE: {
      const { filter } = action.payload;
      return filter;
    }
    case SET_FILTER_SHOW_COMPLETED: {
      const { filter } = action.payload;
      return filter;
    }
    default:
      return state;
  }
}

// const todosInitialState = [
//   { id: 0, text: "Learn about actions", completed: false },
//   { id: 1, text: "Learn about reducers", completed: false },
//   { id: 2, text: "Learn about state", completed: false }
// ];
function todos(state = [], action) {
  switch (action.type) {
    /**
     *
     */
    case FETCH_SUCCESS: {
      const { response } = action.payload;
      return response;
    }
    /**
     *
     */
    case FETCH_FAIL: {
      const { errorMessage } = action.payload;
      console.log(errorMessage);
      return state;
    }

    /**
     *
     */
    case ADD_TODO: {
      const { todo } = action.payload;
      newTodoDB(todo)
      return [...state, todo ];
    }

    /**
     *
     */
    case REMOVE_TODO: {
      const { todo } = action.payload;
      removeTodoDB(todo)
      for (let i = 0; i < state.length; i++) {
        if (state[i] === todo) {
          state.splice(i, 1);
          return [].concat(state); // uguale a :return new Array().concat(state);
        }
      }
      return state;
    }

    /**
     *
     */
    case TOGGLE_TODO: {
      const { todo } = action.payload;
      return state.map(current => {
        if (current === todo) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          });
        }
        return current;
      });
    }

    /**
     *
     */
    default:
      return state;
  }
}

const todoApp = combineReducers({
  // combineReducers generates a function that calls the reducers
  visibilityFilter, // with the slices of state selected according to their keys
  todos // and combines their results into a single (new!) obj again.
});

export default todoApp;

// const todosInitialStateNoFetch = { todos: [] };

// function fetchTodosStatus(state = todosInitialStateNoFetch , action) {
//   switch (action.type) {
//     case FETCH_SUCCESS: {
//       const { response } = action.payload;
//       return {
//         ...state,
//         todos: response
//       }
//     }
//     case FETCH_FAIL: {
//       const { errorMessage } = action.payload;
//       return console.log(errorMessage)
//     }
//     default:
//       return state;

//   }
// }
