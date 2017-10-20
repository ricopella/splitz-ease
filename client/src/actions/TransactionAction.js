import {SAVE_RECEIPT, UPDATE_RECEIPT, SELECTED_PARTY} from './types';

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
    console.log("Hitting Selected Action");
    return {type: SELECTED_PARTY, payload: val}
}