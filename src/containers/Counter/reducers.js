import { INCREMENT, DECREMENT, RESET } from "./actions";

const initialState = {
  counterValue: 0,
  rightDisabled: false,
  leftDisabled: false
};

export default function count(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        counterValue: state.counterValue + 1,
        rightDisabled: state.counterValue + 1 === 10,
        leftDisabled: false
      };
    case DECREMENT:
      return {
        counterValue: state.counterValue - 1,
        leftDisabled: state.counterValue - 1 === -10,
        rightDisabled: false
      };
    case RESET:
      return initialState;

    default:
      return state;
  }
}
