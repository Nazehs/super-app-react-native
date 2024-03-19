// import { FormActionTypes, SAVE_FORM_DATA, FormState } from './types';
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

const initialState: FormState = {
    formData: {
        meterNumber: '',
        billName: '',
    },
};

export const formReducer = (state: FormState = initialState, action: FormActionTypes): FormState => {
    switch (action.type) {
        case SAVE_FORM_DATA:
            return {
                ...state,
                formData: action.payload,
            };
        default:
            return state;
    }
};
