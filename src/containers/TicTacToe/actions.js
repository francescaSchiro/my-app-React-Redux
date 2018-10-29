export const ON_BOX_CLICK = "ON_BOX_CLICK";
export const PRINT_VALUE = "PRINT_VALUE";
export const PRINT_VALUE_FAIL = "PRINT_VALUE_FAIL";
export const CHECK_WINNER = "CHECK_WINNER";
export const RESET_STATE = "RESET_STATE";
export const PICK_SYMBOL = "PICK_SYMBOL";

export function resetState() {
  return {
    type: RESET_STATE,
    payload: {}
  };
};

export function checkWinner() {
  return {
    type: CHECK_WINNER,
    payload: {}
  };
};

export function onBoxClick(i, isTurnX) {
  return {
    type: ON_BOX_CLICK,
    payload: { i, isTurnX }
  };
};

export function printValue(i, value) {
  return {
    type: PRINT_VALUE,
    payload: { i, value }
  };
};

export function pickSymbol(symbol) {
  return {
    type: PICK_SYMBOL,
    payload: { symbol }
  };
};
