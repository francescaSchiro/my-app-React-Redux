
import {
    INCREMENT,
    DECREMENT
} from './actions';

export default function count(state = {counterValue: 0, rightDisabled: false,  leftDisabled: false }, action) { 
    // console.log('helooooo', state)
    
    switch (action.type) {
        
        case INCREMENT:
            return {
                counterValue: state.counterValue + 1,
                rightDisabled: (state.counterValue + 1 === 10),
                leftDisabled: false
            }
        case DECREMENT:
            return {
                counterValue: state.counterValue - 1,
                leftDisabled: (state.counterValue - 1 === -10),
                rightDisabled: false
            }

        default:
            return state
        
    }
}