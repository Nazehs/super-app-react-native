export interface UserData {
    meterNumber: string;
    billName?: string;
    billType: string;
    amount: string
}

export interface FormState {
    formData: UserData | null;
}

export const SAVE_FORM_DATA = 'SAVE_FORM_DATA';

interface SaveFormDataAction {
    type: typeof SAVE_FORM_DATA;
    payload: UserData;
}

export type FormActionTypes = SaveFormDataAction;
