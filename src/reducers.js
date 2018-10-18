/* GLOBAL REDUCER
* import all the app reducers combined e uniscili in un super reducer globale.
*/
import {combineReducers} from 'redux'
import todoApp from './containers/ToDo/reducers';
import count from  './containers/Counter/reducers';
import header from './components/Header/reducer';
// import counterApp from './containers/Counter/reducers'  //Reducers combinati del Counter



// combine DA USARE QUANDO HO PIU DI UN REDUCER
const globalReducer = combineReducers({   // combineReducers generates a function that calls the reducers 
    todoApp,
    count,
    header,                        // and combines their results into a single (new!) obj again.                                                      
})

export default globalReducer