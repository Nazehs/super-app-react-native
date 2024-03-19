import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../store/store';

export type initialStateType = {
  modalVisible: boolean;
  isLoading: boolean;
  isNetworkError: boolean;
  isServerError: boolean;
};

const initialState: initialStateType = {
  modalVisible: false,
  isLoading: false,
  isNetworkError: false,
  isServerError: false,
};

export const modalSlice = createSlice({
  name: 'modalSlice',
  initialState,
  reducers: {
    showModal: state => {
      state.modalVisible = true;
    },
    hideModal: state => {
      state.modalVisible = false;
    },
    setLoader: (state, action) => {
      // console.log(' action.payload',  action.payload)
      state.isLoading = action.payload;
    },
    setNetworkError: (state, action) => {
      state.isNetworkError = action.payload;
    },
    setServerError: (state, action) => {
      state.isServerError = action.payload;
    },
  },
});

export const {
  showModal,
  hideModal,
  setLoader,
  setNetworkError,
  setServerError,
} = modalSlice.actions;

export const SelectModalVisible = (state: RootState) =>
  state.modal.modalVisible;

export const SelectLoadingState = (state: RootState) => state.modal.isLoading;

export const SelectNetworkErrorState = (state: RootState) =>
  state.modal.isNetworkError;

export const SelectServerErrorState = (state: RootState) =>
  state.modal.isServerError;

export const modalReducder = modalSlice.reducer;
