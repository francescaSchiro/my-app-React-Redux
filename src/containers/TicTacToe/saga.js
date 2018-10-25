import { takeEvery, put } from "redux-saga/effects";

import { printValue,  toggleTurn } from "./actions";

/**
 * 
 * @param {object} action: onBoxClick with index(num) and isTurnX(bool) 
 */
function* onBoxClickSW(action) {
    let { i, isTurnX } = action.payload;
    const value = isTurnX ? "X" : "O";
    yield put(printValue(i, value));
    yield put(toggleTurn());
}

function* tictactoeSaga() {
  yield takeEvery("ON_BOX_CLICK", onBoxClickSW);
}

export default tictactoeSaga;