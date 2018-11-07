import { TOGGLE_MENU } from "./actions";

function header(state = { menuIsVisible: false }, action) {
  switch (action.type) {
    case TOGGLE_MENU: {
      return { ...state, menuIsVisible: !state.menuIsVisible };
    }
    default:
      return state;
  }
}

export default header;
