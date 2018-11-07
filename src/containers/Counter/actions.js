export const INCREMENT = "INCREMENT";
export const INCREMENT_DELAY = "INCREMENT_DELAY";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";

export function increment(sumNum) {
  return {
    type: INCREMENT,
    payload: {
      sumNum
    }
  };
}

export function incrementDelay(delayTime, sumNum ) {
  return {
    type: INCREMENT_DELAY,
    payload: {
      delayTime,
      sumNum
    }
  };
}

export function decrement() {
  return {
    type: DECREMENT
  };
}

export function reset() {
  return {
    type: RESET
  };
}
