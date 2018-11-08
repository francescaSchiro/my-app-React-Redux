import { takeEvery, call, put } from "redux-saga/effects";
import { push } from "connected-react-router";

import {
  todosFetchSuccess,
  todosFetchFail,
  addTodoSuccess,
  addTodoFail,
  removeTodoSuccess,
  removeTodoFail,
  toggleTodoSuccess,
  toggleTodoFail,
} from "./actions";
import { getTodos, newTodoDB, removeTodoDB, toggleTodoDB } from "../../api";

function* fetchTodos(action) {
  try {
    let { todosNum } = action.payload;
    if (todosNum === -1) {
      yield put(push(`/todolist/`));
    } else {
      yield put(push(`/todolist/${todosNum}`));
    }
    const response = yield call(getTodos, todosNum);
    yield put(todosFetchSuccess(response));
  
  } catch (err) {
    yield put(todosFetchFail(err));
  }
}

function* addTodoSW(action) {
  try {
    let { todo, todosNum } = action.payload;
    const response = yield call(newTodoDB, todo); // db aggiornato
    yield put(addTodoSuccess(response, todosNum));
    // yield put(push(`/todolist/${todosNum + 1}`));
  } catch (err) {
    yield put(addTodoFail(err));
  }
}

function* removeTodoSW(action) {
  try {
    let { todo } = action.payload;
    yield call(removeTodoDB, todo);
    yield put(removeTodoSuccess(todo));
  } catch (err) {
    yield put(removeTodoFail(err));
  }
}

function* toggleTodoSW(action) {
  try {
    let { todo } = action.payload;
    const response = yield call(toggleTodoDB, todo);
    yield put(toggleTodoSuccess(response));
  } catch (err) {
    yield put(toggleTodoFail(err));
  }
}

function* mySaga() {
  yield takeEvery("TODOS_FETCH_REQUEST", fetchTodos);
  yield takeEvery("ADD_TODO", addTodoSW);
  yield takeEvery("REMOVE_TODO", removeTodoSW);
  yield takeEvery("TOGGLE_TODO", toggleTodoSW);
}

export default mySaga;