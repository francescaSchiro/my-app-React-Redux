import filters from "./filters";

export const SHOW_MODAL = "SHOW_MODAL";
export const HIDE_MODAL = "HIDE_MODAL";



export const TODOS_FETCH_REQUEST = "TODOS_FETCH_REQUEST";
export const TODOS_FETCH_SUCCESS = "TODOS_FETCH_SUCCESS";
export const TODOS_FETCH_FAIL = "TODOS_FETCH_FAIL";

export const ADD_TODO = "ADD_TODO";
export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
export const ADD_TODO_FAIL = "ADD_TODO_FAIL";

export const REMOVE_TODO = "REMOVE_TODO";
export const REMOVE_TODO_SUCCESS = "REMOVE_TODO_SUCCESS";
export const REMOVE_TODO_FAIL = "REMOVE_TODO_FAIL";

export const TOGGLE_TODO = "TOGGLE_TODO";
export const TOGGLE_TODO_SUCCESS = "TOGGLE_TODO_SUCCESS";
export const TOGGLE_TODO_FAIL = "TOGGLE_TODO_FAIL";

export const SET_FILTER_SHOW_ALL = "SET_FILTER_SHOW_ALL";
export const SET_FILTER_SHOW_COMPLETED = "SET_FILTER_SHOW_COMPLETED";
export const SET_FILTER_SHOW_ACTIVE = "SET_FILTER_SHOW_ACTIVE";

/*-----------------------------------------
* action creators
*/

export function showModal(index) {
  return {
    type: SHOW_MODAL,
    payload: {index }
  };
}

export function hideModal(index) {
  return {
    type: HIDE_MODAL,
    payload: {index }
  };
}

export function todosFetchRequest(itemsNumber) {
  return {
    type: TODOS_FETCH_REQUEST,
    payload: { todosNum: itemsNumber }
  };
}

export function todosFetchSuccess(response) {
  return {
    type: TODOS_FETCH_SUCCESS,
    payload: { response }
  };
}

export function todosFetchFail(errorMessage) {
  return {
    type: TODOS_FETCH_FAIL,
    payload: { errorMessage }
  };
}

export function addTodo(todo, todosNum) {
  return {
    type: ADD_TODO,
    payload: { todo, todosNum }
  };
}

export function addTodoSuccess(todo, todosNum) {
  return {
    type: ADD_TODO_SUCCESS,
    payload: { todo, todosNum }
  };
}

export function addTodoFail(err) {
  return {
    type: ADD_TODO_FAIL,
    payload: { err }
  };
}

export function toggleTodo(todo) {
  return {
    type: TOGGLE_TODO,
    payload: { todo }
  };
}

export function toggleTodoSuccess(todo) {
  return {
    type: TOGGLE_TODO_SUCCESS,
    payload: { todo }
  };
}

export function toggleTodoFail(err) {
  return {
    type: TOGGLE_TODO_FAIL,
    payload: { err }
  };
}



export function removeTodo(todo) {
  return {
    type: REMOVE_TODO,
    payload: { todo }
  };
}

export function removeTodoSuccess(todo) {
  return {
    type: REMOVE_TODO_SUCCESS,
    payload: { todo }
  };
}

export function removeTodoFail(err) {
  return {
    type: REMOVE_TODO_FAIL,
    payload: { err }
  };
}

export function setFilterShowAll() {
  return {
    type: SET_FILTER_SHOW_ALL,
    payload: { filter: filters[0] }
  };
}

export function setFilterShowCompleted() {
  return {
    type: SET_FILTER_SHOW_COMPLETED,
    payload: { filter: filters[1] }
  };
}

export function setFilterShowActive() {
  return {
    type: SET_FILTER_SHOW_ACTIVE,
    payload: { filter: filters[2] }
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
