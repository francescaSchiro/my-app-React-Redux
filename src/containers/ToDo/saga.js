import { put, call, takeEvery } from "redux-saga/effects";
import { fetchSuccess, fetchFail } from './actions';
import { getTodos } from '../../api';

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

/**
 *  1a funzione di Saga da fare: inzio a scrivere il programma:
 * appena intercetti "TODOS_FETCH_REQUEST", chiama fetchTodos(definita sopra)
 */

function* mySaga() {
  yield takeEvery("TODOS_FETCH_REQUEST", fetchTodos);
}

export default mySaga;
