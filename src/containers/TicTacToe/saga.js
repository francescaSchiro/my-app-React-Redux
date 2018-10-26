import { takeEvery, put } from "redux-saga/effects";

import { printValue, checkWinner } from "./actions";

/**
 * Saga Worker function
 * @param {object} action : onBoxClick( i, isTurnX )
 * @param {num}: i
 * @param {bool}: isTurnX
 */
function* onBoxClickSW(action) {
  let { i, isTurnX } = action.payload;
  const value = isTurnX ? "X" : "O";
  yield put(printValue(i, value));
  yield put(checkWinner()); 
}

function* tictactoeSaga() {
  yield takeEvery("ON_BOX_CLICK", onBoxClickSW);
}

export default tictactoeSaga;
