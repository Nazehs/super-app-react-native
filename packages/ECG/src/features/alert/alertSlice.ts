import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';
type snackType = 'error' | 'success' | 'warning' | 'info';

export type AlertMessageType = {
  message: string;
  duration: number;
  // type: string;
  type: snackType;
  title?: string;
  zIndex?: number;
  close?: boolean;
};

type AlertState = {
  messages: AlertMessageType[];
};

const initialState: AlertState = {
  messages: [],
};

export const alertSlice = createSlice({
  name: 'alertSlice',
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<AlertMessageType>) => {
      // state.messages = [...state.messages, action.payload];
      state.messages = [action.payload];
      console.log(" state.messages ", state.messages)
    },
    removeMessage: state => {
      // state.messages = state.messages.slice(1, state.messages.length);
      // state.messages = state.messages.filter(
      //   curr => curr.message !== action.payload.message,
      // );
      state.messages = [];
    },
  },
});

export const { addMessage, removeMessage } = alertSlice.actions;

export const selectMessage = (state: RootState) => state.alert.messages;
// export const selectMessage = (state: RootState) => state.snack.messages[0];

export const alertReducer = alertSlice.reducer;
