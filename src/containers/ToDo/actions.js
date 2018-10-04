import filters from './filters';

export const TODOS_FETCH_REQUEST = "TODOS_FETCH_REQUEST";
export const FETCH_SUCCESS= "FETCH_SUCCESS";
export const FETCH_FAIL= "FETCH_FAIL";

export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export const SET_FILTER_SHOW_ALL = "SET_FILTER_SHOW_ALL";
export const SET_FILTER_SHOW_COMPLETED = "SET_FILTER_SHOW_COMPLETED";
export const SET_FILTER_SHOW_ACTIVE = "SET_FILTER_SHOW_ACTIVE";

/*-----------------------------------------
* action creators
*/

export function todosFetchRequest() {
  return {
    type: TODOS_FETCH_REQUEST,
    payload: { }
  };
}

export function fetchSuccess(response) {
  return {
    type: FETCH_SUCCESS,
    payload: { response }
  };
}

export function fetchFail(errorMessage) {
  return {
    type: FETCH_FAIL,
    payload: { errorMessage }
  };
}

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: { todo }
  };
}

export function toggleTodo(todo) {
  return {
    type: TOGGLE_TODO,
    payload: { todo }
  };
}

export function removeTodo(todo) {
  return {
    type: REMOVE_TODO,
    payload: { todo }
  };
}

export function setFilterShowAll() {
  return {
    type: SET_FILTER_SHOW_ALL,
    payload: { filter: filters.ALL }
  };
}

export function setFilterShowCompleted() {
  return {
    type: SET_FILTER_SHOW_COMPLETED,
    payload: { filter: filters.COMPLETED }
  };
}

export function setFilterShowActive() {
  return {
    type: SET_FILTER_SHOW_ACTIVE,
    payload: { filter: filters.ACTIVE }
  };
}

/*
* NOW: define some reducers to specify how the state updates when we dispatch actions
*/

/* ACTIONS only describes what happens.
* They are sent to the store and the reducers specify how state(stored in a SINGLE OBJECT, a sort of DATABASE) changes. 
* For the ToDo app we want to store 2 differnt things:
*   - the currently selected visibility filter 
*   - the actual list of todos (*HINT: try to keep data separate from the UI state) 
*   ...this below is how we want out store to look like.
*   {
*       visibilityFilter: 'SHOW_ALL',
*       todos: [
*           {
*               text: 'Consider using Redux',
*               completed: true
*           },
*           {
*               text:'Keep all state in a single tree',
*               completed: false
*           }
*       ]
*   }
* -----------------------------------------  
* ACTION TYPES
* ------------------------------------   CONSTANTS   -----------------------------------------
mi salvo le stringhe degli actions type come const
*/