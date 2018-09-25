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
import {combineReducers} from 'redux'
import {
    ADD_TODO,
    REMOVE_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    VisibilityFilters
} from './actions'
const {SHOW_ALL} = VisibilityFilters //  ES6 Object Destructuring to declare SHOW_ALL


function visibilityFilter(state = SHOW_ALL, action) { // SHOWALL si può usare perchè è stato destrutturato (sotto import)
    switch (action.type) {
        case SET_VISIBILITY_FILTER: 
            return action.filter
        default:
            return state
    }
}

// const initialState = {                               //It also doesn't need to know the complete initial state anymore.
//     visibilityFilter: VisibilityFilters.SHOW_ALL,    //  It's enough that the child reducers return their initial state when given undefined at first.
//     todos: []                                        // its the combine that makes them a single state object
// }

// we split updating todos in a separate function:
// Note that todos also accepts state—but it's an array! Now todoApp just gives it the slice of the state to manage, and todos knows how to update just that slice.
// This is called reducer composition, and it's the fundamental pattern of building Redux apps.

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false,
                    id: action.text
                }
            ]

            // case REMOVE_TODO:
            // return state.map((todo, index) => {
            //     if (todo.id === action.id) {
            //         return state.splice(index, 1)
            //     } 
            //     return todo
            // })
            

        case REMOVE_TODO:

            for (let i = 0; i < state.length; i++) {
                if (state[i].id === action.id) {
                    state.splice(i, 1);
                    return [].concat(state); // uguale a :return new Array().concat(state);

                }
            }
            return state;

        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (todo.id === action.id) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
            return todo    
            })
        default:
            return state    
    }
}


// function todoApp(state = initialState, action) {
//     switch (action.type) {
//         // case SET_VISIBILITY_FILTER:
//         //     return Object.assign({}, state, {
//         //         visibilityFilter: action.filter
//         //     })
//         case ADD_TODO: 
//             return Object.assign({}, state, {
//                 todos: todos(state.todos, action)
//             })
//         case TOGGLE_TODO: 
//             return Object.assign({}, state, {
//                todos: todos(state.todos, action) 
//             })
//         default: 
//             return state
//     }
// }

// Note that each of these reducers is managing its own part of the global state.
// The state parameter is different for every reducer, and corresponds to the part of the state it manages.

    // function todoApp( state = {}, action) {
    //     return {
    //         visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    //         todos: todos(state.todos, action)
    //     }
    // }


// Redux provides a utility called combineReducers() that does the same boilerplate logic that the todoApp above currently does.
// With its help, we can rewrite todoApp like this:(dopo avere importato il {combineReducers} from 'redux')

const todoApp = combineReducers({   // combineReducers generates a function that calls the reducers 
    visibilityFilter,               // with the slices of state selected according to their keys
    todos,                          // and combines their results into a single (new!) obj again.                                                      
})

export default todoApp