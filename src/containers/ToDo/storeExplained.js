/*
*   We defined ACTIONS (that represent "what happened")
*   and the REDUCERS (that update the state according to those actions)
*   The STORE is the OBJECT that brings them together. It has the following responsibilities:
*       1. Holds Application State;
*       2. Allows access to state via getState();
*       3. Allows state to be updated viaa dispatch(action);
*       4. Registers listeners via subscribe(listener);
*       5. Handles unregistering of listeners via the function returned by subscribe(listener).
*   !!! IMP !!! You'll only have a SINGLE STORE in a Redux Application. 
*               If you want to split data you use reducers.
*/

import {createStore} from 'redux';
import todoApp from './reducers';

const store = createStore(todoApp)      // you may optionally specify the initialState as the second argument. 
                                        // Useful for hydrating the state of the client to match the state of a Redux application running on the server.
                                        // const store = createStore(todoApp, window.STATE_FROM_SERVER)
