import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { PersistConfig } from 'redux-persist/lib/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootState } from '@/store/store';

type AuthState = {
  spalshScreen: boolean,
  newLogin: boolean,
  isSwitchAccount: boolean,
  isLogin: boolean,
  user: any;
  accessToken: any;
  refreshToken: any;
  userDetails: any;
  errorStatus: boolean,
  errorMessage: any;
};

const initialState: AuthState = {
  spalshScreen: true,
  newLogin: true,
  isSwitchAccount: false,
  isLogin: false,
  user: null,
  accessToken: null,
  refreshToken: null,
  userDetails: null,
  errorMessage: null,
  errorStatus: false,
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    spalshScreenAction(state, action) {
      state.spalshScreen = action.payload;
    },
    oneTimeRegistration(state, action) {
      state.newLogin = action.payload;
    },
    switchAccountAction(state, action) {
      state.isSwitchAccount = action.payload;
    },
    isLoggedinAction(state, action) {
      state.isLogin = action.payload;
    },

    updateToken(state, action: PayloadAction<any | undefined>) {
      console.log('action', action.payload)
      console.log('action', action.payload?.status)
      state.refreshToken = action.payload?.refreshToken;
      state.accessToken = action.payload?.accessToken;
    },
    updateUserDetails(
      state,
      action: PayloadAction<any | AuthState['userDetails']>,
    ) {
      console.log('action', action.payload);
      state.userDetails = action.payload;
    },
    errorDataUpdate(
      state,
      action: PayloadAction<any | AuthState['userDetails']>,
    ) {
      state.errorMessage = action.payload?.errorMessage,
        state.errorStatus = action.payload?.errorStatus
    },
    logOut: state => {
      state.user = null;
      state.accessToken = null;
    },
  },
});

export const selectUserDetails = (state: RootState) => state.auth.userDetails;

export const { errorDataUpdate, spalshScreenAction, oneTimeRegistration, switchAccountAction, isLoggedinAction, updateToken, updateUserDetails, logOut } = authSlice.actions;

const persistConfig: PersistConfig<any> = {
  key: 'rtk:auth',
  storage: AsyncStorage,
  whitelist: ['accessToken', 'newLogin'],
};

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
