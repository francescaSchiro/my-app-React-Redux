// /* ACTIONS only describes what happens.
// * They are sent to the store and the reducers specify how state(stored in a SINGLE OBJECT, a sort of DATABASE) changes. 
// * For the ToDo app we want to store 2 differnt things:
// *   - the currently selected visibility filter 
// *   - the actual list of todos (*HINT: try to keep data separate from the UI state) 
// *   ...this below is how we want out store to look like.
// *   {
// *       visibilityFilter: 'SHOW_ALL',
// *       todos: [
// *           {
// *               text: 'Consider using Redux',
// *               completed: true
// *           },
// *           {
// *               text:'Keep all state in a single tree',
// *               completed: false
// *           }
// *       ]
// *   }
// * -----------------------------------------  
// * ACTION TYPES
// * ------------------------------------   CONSTANTS   -----------------------------------------
// mi salvo le stringhe degli actions type come const
// */

// export const ADD_TODO = 'ADD_TODO'
// export const TOGGLE_TODO = 'TOGGLE_TODO'
// export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
// export const REMOVE_TODO = 'REMOVE_TODO'

// /*
// * other constants
// */

// export const VisibilityFilters = {
//     SHOW_ALL: 'SHOW_ALL',
//     SHOW_COMPLETED: 'SHOW_COMPLETED',
//     SHOW_ACTIVE: 'SHOW_ACTIVE'
// }

// /*-----------------------------------------
// * action creators
// */

// export function addTodo(text) {
//     return {
//         type:ADD_TODO, 
//         text
//     }
// }

// export function toggleTodo(id) {
  
//     return {
//         type:TOGGLE_TODO, 
//         id
//     }
// }

// export function setVisibilityFilter(filter) {
//     return {
//         type: SET_VISIBILITY_FILTER, 
//         filter
//     }
// }

// export function removeTodo(id) {
//     return {
//         type:REMOVE_TODO,
//         id
//     }
// }


// /*
// * NOW: define some reducers to specify how the state updates when we dispatch actions
// */