import { UserData, SAVE_FORM_DATA, FormActionTypes } from './types';

export const saveFormData = (data: UserData): FormActionTypes => ({
    type: SAVE_FORM_DATA,
    payload: data,
});
