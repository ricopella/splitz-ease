import {SAVE_RECEIPT, UPDATE_RECEIPT, SELECTED_PARTY, UPDATE_TIP} from '../actions/types';

const INITIAL_STATE = {
    ocrResult: {},
    total: 0,
    tax: 0,
    selected: undefined,
    tipAmount: {
        tenPercent: false,
        fifteenPercent: false,
        twentyPercent: false,
        custom: false
    },
    tipTen: 0,
    tipFifteen: 0,
    tipTwenty: 0,
    customTip: null
}

export default(state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SAVE_RECEIPT:
            return {
                ...state,
                ocrResult: action.payload
            };
        case UPDATE_RECEIPT:
            return {
                ...state,
                total: action.payload.total,
                tax: action.payload.tax
            };
        case SELECTED_PARTY:
            return {
                ...state,
                selected: action.payload
            }
        case UPDATE_TIP:
            console.log("TIP: " + action.payload);
            return {
                ...state,
                tipTen: action.payload.tipTen,
                tipFifteen: action.payload.tipFifteen,
                tipTwenty: action.payload.tipTwenty
            }
        default:
            return state;
    }
}