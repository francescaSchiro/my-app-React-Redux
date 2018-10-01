/* ACTIONS COUNTER
*
*   {                       // set initial state 0 nel reducer??
*       counterValue = 0   // to update at every button click
        leftDisabled = false
        rightDisabled = false
        
*   }
* -----------------------------------------  
* ACTION TYPES
* ------------------------------------   CONSTANTS   -----------------------------------------
mi salvo le stringhe degli actions type come const
*/

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const RESET = 'RESET'

/*-----------------------------------------
* action creators
*/

export function increment() {
    return {
        type:INCREMENT
    }
}

export function decrement() {
    return {
        type:DECREMENT
    }
}

export function reset() {
    return {
        type:RESET
    }
}
/*
* NOW: define some reducers to specify how the state updates when we dispatch actions
*/