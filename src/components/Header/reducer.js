import {
    TOGGLE_MENU
} from "./actions";


function header( state = { menuIsVisible : false }, action) {
    switch(action.type) {
        case TOGGLE_MENU:{
            state.menuIsVisible = !state.menuIsVisible
            return  { ...state }; 
        }
        default:
        return state;
    }
}

export default header;