import { TOGGLE_DEBUG } from "./actions";

const initialState = {
    isDebugActive: false
};



export default function parallax(state = initialState, action) {
    switch (action.type) {
      case TOGGLE_DEBUG: {
        return {...state, isDebugActive: !state.isDebugActive };
    }
      default: {
        return state;
      }
    }
  }
