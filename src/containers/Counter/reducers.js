import { INCREMENT, DECREMENT, RESET } from "./actions";

const initialState = {
  counterValue: 0,
  rightDisabled: false,
  leftDisabled: false
};
/** REDUCER count
 * @param  {object} state - initialState  { counterValue: 0, rightDisabled: false, leftDisabled: false }
 * @param  {object} action - {type, payload{}}
 */
export default function count(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
    const { sumNum } = action.payload
      return {
        counterValue: state.counterValue + sumNum,
        rightDisabled: state.counterValue + sumNum >= 20,
        leftDisabled: false
      };
  
    case DECREMENT:
      return {
        counterValue: state.counterValue - 1,
        leftDisabled: state.counterValue - 1 <= -5,
        rightDisabled: false
      };
    case RESET:
      return initialState;

    default:
      return state;
  }
}
