import {SAVE_RECEIPT, UPDATE_RECEIPT} from './types';

export const saveReceipt = (ocrResult) => {
    return {type: SAVE_RECEIPT, payload: ocrResult};
}

export const updateReceipt = (total, tax) => {
    console.log("Hitting Update Action: " + total + " " + tax);
    return {
        type: UPDATE_RECEIPT,
        payload: {
            total,
            tax
        }
    }
}