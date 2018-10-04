import { takeEvery, call, put } from "redux-saga/effects";

import { fetchSuccess, fetchFail } from './actions';
import { getTodos } from '../../api';


/**
 *  1a funzione di Saga da fare: inzio a scrivere il programma:
 * appena intercetti "TODOS_FETCH_REQUEST", chiama fetchTodos(definita sopra)
 * "watcher saga" > watches for actions dispatched to the store, starts worker saga
 * you export the Watcher and map on the store
 */

function* mySaga() {
  yield takeEvery("TODOS_FETCH_REQUEST", fetchTodos);
}

export default mySaga;

/**
 * 
 * "Worker Saga: makes the api call(in this case the getTodos fake api call. an hardcoded new Promise) when watcher saga sees the action"
 */
export function* fetchTodos(action) {
  try {
    const response = yield call(getTodos);
    yield put(fetchSuccess(response));

  }
  catch(err) {
    yield put(fetchFail(err));
  } 
}

// fetch('../todos.json')
// .then( (res) => res.json())
// .then((data) => {
//     console.log('data:', data);
//   }

