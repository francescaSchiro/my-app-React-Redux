// import { combineReducers } from "redux";

import { PRINT_VALUE, CHECK_WINNER, RESET_STATE } from "./actions";

const initialState = {
  board: ["", "", "", "", "", "", "", "", ""],
  isThereWinner: false,
  isTurnX: true
};
/**
 * REDUCER that manages the content of each cell.
 * @param {array} state: 9 string that represents the content of each cell(value).
 * @param {object} action { type: string, payload: { i, value }}
 */

export default function tictactoe(state = initialState, action) {
  switch (action.type) {
    // writes value in cell[i]
    case PRINT_VALUE: {
      const { i, value } = action.payload;
      return {
        ...state,
        board: state.board.map((el, index) => (index === i ? value : el))
      };
    }
    // cross checks for winner. if there's one isThereWinner = true. if NOT : !isTurnX
    case CHECK_WINNER: {
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
      } 
      // else if (
      //    state.board[0] !== "" &&
      //     state.board[1] !== "" && 
      //     state.board[2] !== "" &&
      //     state.board[3] !== "" &&
      //     state.board[4] !== "" &&
      //     state.board[5] !== "" &&
      //     state.board[6] !== "" &&
      //     state.board[7] !== "" &&
      //     state.board[8] !== "" ) {
      //     return {...state, isThereWinner: undefined };
      //     } 
          else {
        return { ...state, isTurnX: !state.isTurnX };
      }
    }
    // reset Game to initialState to start a new Game and rerender the <Game>
    case RESET_STATE: {
      console.log(initialState);
      return initialState;
    }
    default: {
      return state;
    }
  }
}

// const tictactoe = board;

// export default tictactoe;

// const tictactoe = combineReducers({
//   board
// });

// case CHECK_WINNER: {
//   if (
//     (state.board[0] === state.board[1]) === state.board[2] || // check 1st row
//     (state.board[3] === state.board[4]) === state.board[5] || // check 2nd row
//     (state.board[6] === state.board[7]) === state.board[8] || // check 3rd row
//     (state.board[0] === state.board[3]) === state.board[6] || // check 1st column
//     (state.board[1] === state.board[4]) === state.board[7] || // check 2nd column
//     (state.board[2] === state.board[5]) === state.board[8] || // check 3rd column
//     (state.board[0] === state.board[4]) === state.board[8] || // check 1st diagonal
//     (state.board[2] === state.board[4]) === state.board[6] // check 2nd diagonal
//   ) {
//     state.isThereWinner = true;
//     return { ...state };
//   } return state;
// }
