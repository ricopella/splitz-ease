import {SAVE_RECEIPT, UPDATE_RECEIPT, SELECTED_PARTY, UPDATE_TIP, UPDATE_PHONE} from './types';

export const saveReceipt = (ocrResult) => {
    return {type: SAVE_RECEIPT, payload: ocrResult};
}

export const updateReceipt = (total, tax) => {
    return {
        type: UPDATE_RECEIPT,
        payload: {
            total,
            tax
        }
    }
}

export const selectedParty = (val) => {
    return {type: SELECTED_PARTY, payload: val}
}

export const updateTip = (tipTen, tipFifteen, tipTwenty) => {
    console.log("Hitting Selected Action");
    return {
        type: UPDATE_TIP,
        payload: {
            tipTen,
            tipFifteen,
            tipTwenty
        }
    }
}

export const updatePhone = (tipPer, tip, perPerson) => {
    return {
        type: UPDATE_PHONE,
        payload: {
            tipPer,
            tip,
            perPerson
        }
    }
}