export const ON_BOX_CLICK = "ON_BOX_CLICK";
export const PRINT_VALUE = "PRINT_VALUE";
export const PRINT_VALUE_FAIL = "PRINT_VALUE_FAIL";
export const TOGGLE_TURN = "TOGGLE_TURN";

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

export function toggleTurn() {
  return {
    type: TOGGLE_TURN,
    payload: {}
  };
}
