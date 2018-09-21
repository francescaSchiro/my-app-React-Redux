/* REDUCER
* Now that we decided what our state object looks like (----> look at action.js)
* We are ready to write a Reducer for it.
* >> a Pure Function that takes the PREVIOUS STATE and an ACTION, and returns the NEXT STATE.
* (previousState, action) => newState
* !!! DONT DO inside the Reducer (it has to stay PURE) !!!
*   - mutate arguments,
*   - API calls or routing transitions,
*   - Call non-pure func (ex. Date.now() or Math.random())
*   --> Given the same arguments, it should calculate the next state and return it.
*   No surprises. No side effects. No API calls. No mutations. Just a calculation. 
*/

/*
*   START: specify initial state.
*   (Redux will call our Reducer with an undefined state for the first time.
    This is our chance to return the initial state)
*/

import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    VisibilityFilters
} from './actions'

const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: []
}

// function todoApp(state = initialState, action) {
//     // For now, don't handle any actions
//     // and just return the state given to us.
//     return state
//   }

function todoApp(state = initialState, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return Object.assign({}, state, {   //=Obj.assign(target, ...sources) copia tutte le proprietà enumerabili da uno o più oggetti di origine in un oggetto di destinazione. 
                visiblityFilter: action.filter  // ..e restituisce l'oggetto di destinazione.
            })
        case ADD_TODO:
            return Object.assign({}, state, { //ricopiami in un oggetto vuoto
                todos: [
                    ...state.todos, // tutti i todos dello stato
                    {                       // e, concatena il todo nuovo dispatchato(constructed using data from action) con i parametri dell'azione ADD_TODO.(text e completed)
                        text: action.text,
                        completed:false
                    }
                ]
            })    //!!!!-- GOLDEN RULE: never assign to anything inside the state unless you clone it first.!!!!!!!!!!!!!!!!!!
        case TOGGLE_TODO: //  create a new array with the same items except the item at the index. !!!! FOR IMMUTABILITY IT'S BEST TO USE LIBRARY LIKE IMMUTABLE TO MANAGE THESE OPERATIONS !!!!
            return Object.assign({}, state, {           //quando dispatch TOGGLE_TODO, copiami un nuovo state obj
                todos: state.todos.map((todo, index) => {   // che per ogni todo dell'array todos, 
                    if (index === action.index) {           // solo se l'index corrisponde a quello che ha triggerato l'azione
                        return Object.assign({}, todo, {    // ritornami l'oggetto todo dell'array 
                            completed: !todo.completed      // con il parametro completed invertito(se true>false o viceversa) (in pratica marcamelo completato o meno nel toggle)
                        })
                    }
                    return todo
                })    
            })    
        default:
            return state
    }
}

/* Note that:
*  1. we don't mutate the state. We create a copy with Obj.assign()
*  Object.assign(state, { visibilityFilter: action.filter }) is also wrong!
*  !!!! It will mutate the first argument. You must supply an empty object as the first parameter.
*  You can also enable the object spread operator proposal to write { ...state, ...newState } instead.
*  2. We return the previous state in the default case.
*  It's important to return the previous state for any unknown action.
            !!! Object.assign() isES6 and not supported by older browsers. you need this babel plugin:
                .babelrc
            {
            "plugins": ["transform-object-assign"]
            }

*/