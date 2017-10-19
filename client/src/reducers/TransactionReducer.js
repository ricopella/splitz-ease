import {SAVE_RECEIPT} from '../actions/types';

const INITIAL_STATE = {
    ocrResult: {}
}

export default(state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SAVE_RECEIPT:
            console.log("Hitting this reducer");
        default:
            return state;
    }
}