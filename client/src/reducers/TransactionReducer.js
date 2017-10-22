import {SAVE_RECEIPT, UPDATE_RECEIPT, SELECTED_PARTY, UPDATE_TIP, UPDATE_PHONE} from '../actions/types';

const INITIAL_STATE = {
    ocrResult: {},
    total: 0,
    tax: 0,
    selected: null,
    tipAmount: {
        tenPercent: false,
        fifteenPercent: false,
        twentyPercent: false,
        custom: false
    },
    tipTen: 0,
    tipFifteen: 0,
    tipTwenty: 0,
    customTip: null,
    perPerson: null,
    tipPer: null,
    tip: 0
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
            let number = parseInt(action.payload);
            return {
                ...state,
                selected: action.payload,
                myNumber: Array(parseInt(action.payload)).fill('')
            }
        case UPDATE_TIP:
            return {
                ...state,
                tipTen: action.payload.tipTen,
                tipFifteen: action.payload.tipFifteen,
                tipTwenty: action.payload.tipTwenty
            }
        case UPDATE_PHONE:
            console.log("HITTING REDUCER: " + action.payload.perPerson);
            return {
                ...state,
                tipPer: (action.payload.tipPer).toFixed(2),
                tip: (action.payload.tip).toFixed(2),
                perPerson: (action.payload.perPerson).toFixed(2)
            }
        default:
            return state;
    }
}