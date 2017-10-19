import {SAVE_RECEIPT} from './types';

export const saveReceipt = (ocrResult) => {
    console.log("HITTING THIS ACTION");
    return {type: SAVE_RECEIPT, payload: ocrResult};
}