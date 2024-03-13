import { FormActionTypes, SAVE_FORM_DATA, FormState } from './types';

const initialState: FormState = {
    formData: {
        meterNumber: '',
        amount: '',
        billName: '',
        billType: ''
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
