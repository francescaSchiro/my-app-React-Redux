import {
  PRINT_VALUE,
  CHECK_WINNER,
  RESET_STATE,
  PICK_SYMBOL,
  ADD_TO_HISTORY,
  LOAD_PREVIOUS_HISTORY_BOARD,
  LOAD_NEXT_HISTORY_BOARD
} from "./actions";

const initialState = {
  board: Array(9).fill(""),
  isThereWinner: false,
  isTurnX: true,
  pickedSymbol: false,
  history: [] , //array of all the moves Objects.
  leftDisabled: true,
  rightDisabled: true
};
/**
 * REDUCER that manages the content of each cell and a bunch of other stuff.
 * @param {object} state - { board: arr, isThereWinner: bool, isTurnX: bool; pickedSymbol: bool, history: arr }
 * @param {object} action { type: string, payload: { i, value }}
 */

export default function tictactoe(state = initialState, action) {
  const currentBoardIndex = state.history.indexOf(state.board);
  let historyLength = state.history.length;

  switch (action.type) {
    case PRINT_VALUE:
      const { i, value } = action.payload;
      return {
        ...state,
        board: state.board.map((el, index) => (index === i ? value : el))
      };

    case ADD_TO_HISTORY:
      state.history.push(state.board);
      return {
        ...state,
        history: state.history
      };

    case LOAD_PREVIOUS_HISTORY_BOARD:
      // Going back with empty history. you haven't started playing yet.
      if (historyLength === 0) return state;

      // History has boards
      let previousBoard;
      let leftDisabled = state.leftDisabled;

      switch (currentBoardIndex) {
        case 0:
          previousBoard = initialState.board;
          leftDisabled = !state.leftDisabled;
          break;
        // in case i look for indexOf the empty board that is not in the array history, I get -1 as returned value.
        case -1:
          return state;
        default:
          previousBoard = state.history[currentBoardIndex - 1];
          break;
      }

      return {
        ...state,
        board: previousBoard,
        isTurnX: !state.isTurnX,
        leftDisabled: leftDisabled
      };

    case LOAD_NEXT_HISTORY_BOARD:
      // if (historyLength === 0) return state;
      let nextBoard;

      // if board array(status) is = to last array in History (no more moves available forward) => return state as it actually is right now.
      if (state.board === state.history[historyLength - 1]) return state;

      switch (currentBoardIndex) {

        //if I forward without any move yet.(history arr empty)
        case -1:
          nextBoard = state.history[0];

        default:
          nextBoard = state.history[currentBoardIndex + 1];
          break;
      }

      return {
        ...state,
        board: nextBoard,
        isTurnX: !state.isTurnX

      };

    case CHECK_WINNER:
      if (
        (state.board[0] === state.board[1] &&
          state.board[1] === state.board[2] &&
          state.board[2] !== "") || // check 1st row
        (state.board[3] === state.board[4] &&
          state.board[4] === state.board[5] &&
          state.board[5] !== "") || // check 2nd row
        (state.board[6] === state.board[7] &&
          state.board[7] === state.board[8] &&
          state.board[8] !== "") || // check 3rd row
        (state.board[0] === state.board[3] &&
          state.board[3] === state.board[6] &&
          state.board[6] !== "") || // check 1st column
        (state.board[1] === state.board[4] &&
          state.board[4] === state.board[7] &&
          state.board[7] !== "") || // check 2nd column
        (state.board[2] === state.board[5] &&
          state.board[5] === state.board[8] &&
          state.board[8] !== "") || // check 3rd column
        (state.board[0] === state.board[4] &&
          state.board[4] === state.board[8] &&
          state.board[8] !== "") || // check 1st diagonal
        (state.board[2] === state.board[4] &&
          state.board[4] === state.board[6] &&
          state.board[6] !== "") // check 2nd diagonal
      ) {
        return { ...state, isThereWinner: true };
      } else if (
        state.board[0] !== "" &&
        state.board[1] !== "" &&
        state.board[2] !== "" &&
        state.board[3] !== "" &&
        state.board[4] !== "" &&
        state.board[5] !== "" &&
        state.board[6] !== "" &&
        state.board[7] !== "" &&
        state.board[8] !== ""
      ) {
        return { ...state, isThereWinner: null };
      } else {
        return { ...state, isThereWinner: false, isTurnX: !state.isTurnX };
      }

    case RESET_STATE:
      return initialState;

    case PICK_SYMBOL:
      const { symbol } = action.payload;
      if (symbol === "X") {
        return { ...state, isTurnX: true, pickedSymbol: true };
      } else {
        return { ...state, isTurnX: false, pickedSymbol: true };
      }
    default:
      return state;
  }
}
