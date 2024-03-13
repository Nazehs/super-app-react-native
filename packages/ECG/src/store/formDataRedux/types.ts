export interface UserData {
    meterNumber: string;
    billName?: string;
    amount: string;
    billType: string;
}

export interface FormState {
    formData: UserData;
}

export const SAVE_FORM_DATA = 'SAVE_FORM_DATA';

interface SaveFormDataAction {
    type: typeof SAVE_FORM_DATA;
    payload: UserData;
}

export type FormActionTypes = SaveFormDataAction;
