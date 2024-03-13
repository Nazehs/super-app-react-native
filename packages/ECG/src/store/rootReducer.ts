import { alertReducer } from '@/features/alert/alertSlice';
import { modalReducer } from '@/features/alert/modalSlice';
import { authReducer } from '@/features/auth/authSlice';
import { combineReducers } from '@reduxjs/toolkit';
import { formReducer } from './billData/reducers';

export const rootReducer = combineReducers({

  auth: authReducer,
  formData: formReducer,
  alert: alertReducer,
  modal: modalReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>;
