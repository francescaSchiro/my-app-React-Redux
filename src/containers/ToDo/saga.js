import { takeEvery, call, put } from "redux-saga/effects";

import { fetchSuccess, fetchFail } from "./actions";
import { getTodos } from "../../api";

export function* fetchTodos(action) {
  try {
    let { todosNum } = action.payload;
    const response = yield call(getTodos, todosNum);
    yield put(fetchSuccess(response));
  } catch (err) {
    yield put(fetchFail(err));
  }
}


function* mySaga() {
  yield takeEvery("TODOS_FETCH_REQUEST", fetchTodos);
}

export default mySaga;

/**
 *
 * "Worker Saga: only gets the 1st 3 objects of the todos array.
 * and RETURNS the todo!!! (cause we need them in VisibleTodoList when that filterLink is selected.)
 * !!!!...nell'action payload poi ci sarà anche il numero inserito dall'utente per filtrare i todos. 
 * il numero inserito sarà messo come endpoint del path;
 * la fetch lo prenderà per restituire un certo numero di dati
 * ... che fetcherà un det num di todos e li restituirà.
 
 */

/**
 *
 * "Worker Saga: makes the api call(in this case the getTodos fake api call. an hardcoded new Promise) when watcher saga sees the action"
 */

// fetch('../todos.json')
// .then( (res) => res.json())
// .then((data) => {
//     console.log('data:', data);
//   }

/**
 *  1a funzione di Saga da fare: inzio a scrivere il programma:
 * appena intercetti "TODOS_FETCH_REQUEST", chiama fetchTodos(definita sopra)
 * "watcher saga" > watches for actions dispatched to the store, starts worker saga
 * you export the Watcher and map on the store
 */
