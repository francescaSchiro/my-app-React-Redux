import { combineReducers } from "redux";
import {
  ADD_TODO_SUCCESS,
  ADD_TODO_FAIL,
  REMOVE_TODO_SUCCESS,
  REMOVE_TODO_FAIL,
  TOGGLE_TODO_SUCCESS,
  TOGGLE_TODO_FAIL,
  SET_FILTER_SHOW_ALL,
  SET_FILTER_SHOW_ACTIVE,
  SET_FILTER_SHOW_COMPLETED,
  TODOS_FETCH_SUCCESS,
  TODOS_FETCH_FAIL
} from "./actions";

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

function todos(state = [], action) {
  switch (action.type) {
    /**
     *
     */
    case TODOS_FETCH_SUCCESS: {
      const { response } = action.payload;
      return response;
    }
    /**
     *
     */
    case TODOS_FETCH_FAIL: {
      const { errorMessage } = action.payload;
      console.log(errorMessage);
      return state;
    }

    /**
     *
     */
    case ADD_TODO_SUCCESS: {
      const { todo } = action.payload;
      console.log(todo);
      return [ ...state, todo ];
    }

    case ADD_TODO_FAIL: {
      const { err } = action.payload;
      console.log(err);
      return state;
    }

    /**
     *
     */
    case REMOVE_TODO_SUCCESS: {
      const { todo } = action.payload;
      for (let i = 0; i < state.length; i++) {
        if (state[i] === todo) {
          state.splice(i, 1);
          return [].concat(state); // uguale a :return new Array().concat(state);
        }
      }
      return state;
    }

    case REMOVE_TODO_FAIL: {
      const { err } = action.payload;
      console.log(err);
      return state;
    }

    /**
     *
     */
    // case TOGGLE_TODO_SUCCESS: {
    //   const { todo } = action.payload;
    //   return state.map(current => {
    //     if (current === todo) {
    //       return Object.assign({}, todo, {
    //         completed: !todo.completed
    //       });
    //     }
    //     return current;
    //   });
    // }

    case TOGGLE_TODO_SUCCESS: {
      const { todo } = action.payload;
      return state.map(current => (current.id === todo.id) ? todo : current);
      // return [
      //   ...state.map(current => (current.id === todo.id) ? todo : current)
      // ];
    }

    case TOGGLE_TODO_FAIL: {
      const { err } = action.payload;
      console.log(err);
      return state;
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
