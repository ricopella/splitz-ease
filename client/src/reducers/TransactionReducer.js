import {SAVE_RECEIPT, UPDATE_RECEIPT, SELECTED_PARTY} from '../actions/types';

const INITIAL_STATE = {
    ocrResult: {},
    total: 0,
    tax: 0,
    selected: undefined
}

export default(state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SAVE_RECEIPT:
            return {
                ...state,
                ocrResult: action.payload
            };
        case UPDATE_RECEIPT:
            console.log("Total: " + action.payload.total + "Tax " + action.payload.tax);
            return {
                ...state,
                total: action.payload.total,
                tax: action.payload.tax
            };
        case SELECTED_PARTY:
            console.log("Selected:" + action.payload);
            return {
                ...state,
                selected: action.payload
            }
        default:
            return state;
    }
}