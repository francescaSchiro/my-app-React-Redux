import {
  PRINT_VALUE,
  CHECK_WINNER,
  RESET_STATE,
  PICK_SYMBOL,
  ADD_TO_HISTORY
} from "./actions";

const initialState = {
  board: Array(9).fill(""),
  isThereWinner: false,
  isTurnX: true,
  pickedSymbol: false,
  history: [{ board: Array(9).fill("") }] //array of all the moves Objects. Ex. before 1st move
};
/**
 * REDUCER that manages the content of each cell and a bunch of other stuff.
 * @param {object} state - { board: arr, isThereWinner: bool, isTurnX: bool; pickedSymbol: bool, history: arr }
 * @param {object} action { type: string, payload: { i, value }}
 */

export default function tictactoe(state = initialState, action) {
  switch (action.type) {
    case PRINT_VALUE:
      const { i, value } = action.payload;
      return {
        ...state,
        board: state.board.map((el, index) => (index === i ? value : el))
      };

    case ADD_TO_HISTORY:
      return {
        ...state,
        history: state.history.concat( { board: state.board })
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
