import { delay } from "redux-saga";
import { takeEvery, put } from "redux-saga/effects";

import { increment, INCREMENT_DELAY } from "./actions";

export function* incrementDelayWorker(action) {
  console.log("incrementDelayWorker")
  const { delayTime, sumNum } = action.payload;
  yield delay(delayTime);
  yield put(increment(sumNum));
}

//saga watcher
function* watchIncrementDelay() {
  yield takeEvery(INCREMENT_DELAY, incrementDelayWorker);
}

export default watchIncrementDelay;
