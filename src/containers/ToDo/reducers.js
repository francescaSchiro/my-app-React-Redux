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
  TODOS_FETCH_FAIL,
  SHOW_MODAL,
  HIDE_MODAL
} from "./actions";

import filters from "./filters";
/* filters: 
{

  ALL: {
    id: 0,
    filterName: 'ALL',
  },
  COMPLETED: {
    id: 1,
    filterName: 'COMPLETED'
  },
  ACTIVE: {
    id: 2,
    filterName: 'ACTIVE'
  }
}
*/

function visibilityFilter(state = filters[0], action) {
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

function todos(state = [ ], action) {
  switch (action.type) {
    case SHOW_MODAL: {
      const { index } = action.payload;
      state[index].show = true
      return [...state ];
    }

    case HIDE_MODAL: {
      const { index } = action.payload;
      state[index].show = false
      return [...state ];
    }
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
      const { todo, todosNum } = action.payload;
      console.log(todo);
      if (todosNum > state.length || todosNum === "") {
        return [...state, todo];
      }
      return state;
    }

    case ADD_TODO_FAIL: {
      const { err } = action.payload;
      console.log(err);
      return state;
    }
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

    case TOGGLE_TODO_SUCCESS: {
      const { todo } = action.payload;
      return state.map(current => (current.id === todo.id ? todo : current));
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
  todos,
});

export default todoApp;
