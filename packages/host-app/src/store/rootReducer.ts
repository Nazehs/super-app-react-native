

import { combineReducers } from '@reduxjs/toolkit';
import { formReducer } from './formReducer';
import { alertReducer } from '../components/features/alert/alertSlice';
import { modalReducder } from '../components/features/alert/modalSlice';
import { authReducer } from '../components/features/auth/authSlice';

export const rootReducer = combineReducers({
  // api: apiSlice.reducer,
  formData: formReducer,
  // nodeApi: nodeApi.reducer,
  auth: authReducer,
  alert: alertReducer,
  modal: modalReducder,
});

export type AppstateType = ReturnType<typeof rootReducer>;
