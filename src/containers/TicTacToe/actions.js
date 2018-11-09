export const ON_BOX_CLICK = "ON_BOX_CLICK";
export const PRINT_VALUE = "PRINT_VALUE";
export const PRINT_VALUE_FAIL = "PRINT_VALUE_FAIL";
export const CHECK_WINNER = "CHECK_WINNER";
export const RESET_STATE = "RESET_STATE";
export const PICK_SYMBOL = "PICK_SYMBOL";
export const ADD_TO_HISTORY = "ADD_TO_HISTORY";
export const LOAD_PREVIOUS_HISTORY_BOARD = "LOAD_PREVIOUS_HISTORY_BOARD";
export const LOAD_NEXT_HISTORY_BOARD = "LOAD_NEXT_HISTORY_BOARD";


export function resetState() {
  return {
    type: RESET_STATE,
    payload: {}
  };
}

export function addToHistory() {
  return {
    type: ADD_TO_HISTORY,
    payload: {}
  }
}

export function loadPreviousHistoryBoard() {
  return {
    type: LOAD_PREVIOUS_HISTORY_BOARD,
    payload: {}
  }
}

export function loadNextHistoryBoard() {
  return {
    type: LOAD_NEXT_HISTORY_BOARD,
    payload: {}
  }
}


export function checkWinner() {
  return {
    type: CHECK_WINNER,
    payload: {}
  };
}

export function onBoxClick(i, isTurnX) {
  return {
    type: ON_BOX_CLICK,
    payload: { i, isTurnX }
  };
}

export function printValue(i, value) {
  return {
    type: PRINT_VALUE,
    payload: { i, value }
  };
}

export function pickSymbol(symbol) {
  return {
    type: PICK_SYMBOL,
    payload: { symbol }
  };
}
