import { combineReducers } from "redux";

import { PRINT_VALUE, TOGGLE_TURN } from "./actions";


/**
 * REDUCER that manages the player's turn: if it's true it should render X.
 * @param {object} state with property isTurnX: boolean
 * @param {object} action  that contains "type" and "payload object: { i, value }"
 */

function turn(state = { isTurnX: true }, action) {
  switch (action.type) {
    case TOGGLE_TURN: {
      state.isTurnX = !state.isTurnX;
      return { ...state };
    }
    default: {
      return state;
    }
  }
}

/**
 * REDUCER that manages the content of each cell.
 * @param {array} state: 9 string that represents the content of each cell(value).
 * @param {object} action that contains "type" and "payload object: { i, value }"
 */

const initialState = ["", "", "", "", "", "", "", "", ""];

function board(state = initialState, action) {
  switch (action.type) {
    case PRINT_VALUE: {
      const { i, value } = action.payload;
      state[i] = value;
      return [...state];
    }
    default: {
      return state;
    }
  }
}

const tictactoe = combineReducers({
  turn,
  board
});

export default tictactoe;
