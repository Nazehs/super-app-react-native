import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PersistConfig } from 'redux-persist/lib/types';
// import {clearAuthToken, deleteCmsCache} from '@/utils/utilities/cache';
// import { mmkvStorage } from '@/utils/storage';
import { RootState } from '../../../store/store';
// import { AuthState } from './types';

// const initialState: AuthState = {};
type AuthState = {
  userLoggedIn: boolean | null;
  isOnboarded: boolean;
  accessToken: any;
  refreshToken: any;
  sessionId: any;
  preloginSessionId: any;
  accountToken: any;
  userDetails: any;
  isAutoVerified: boolean;
  lastSignedIn: string;
  initHeaders: Object;
  commonHeaders: Object;
  userAuthToken: any;
  isBiometricEnabled: any;
  biometricAttempts: any;
};

const initialState: AuthState = {
  userLoggedIn: false,
  accessToken: null,
  refreshToken: null,
  sessionId: null,
  preloginSessionId: null,
  // userDetails: {mobileNumber: ''},
  userDetails: null,
  isAutoVerified: false,
  isOnboarded: false,
  lastSignedIn: '',
  initHeaders: {},
  commonHeaders: {},
  userAuthToken: null,
  isBiometricEnabled: null,
  biometricAttempts: null,
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    updateToken(state, action: PayloadAction<any | undefined>) {
      console.log('action', action.payload);
      state.accessToken = action.payload?.accessToken;
    },
    updateSessionId(state, action: PayloadAction<any | undefined>) {
      console.log('action', action.payload);
      state.sessionId = action.payload?.sessionid;
    },
    updatePreLoginSessionId(state, action: PayloadAction<any | undefined>) {
      console.log('action', action.payload);
      state.preloginSessionId = action.payload?.preloginSessionId;
    },
    updateUserDetails(
      state,
      action: PayloadAction<any | AuthState['userDetails']>,
    ) {
      console.log('action', action.payload);
      state.userDetails = action.payload;
    },
    updateAutoVerified(
      state,
      action: PayloadAction<any | AuthState['isAutoVerified']>,
    ) {
      console.log('action', action.payload);
      state.isAutoVerified = action.payload;
    },
    updateLastSignedIn(
      state,
      action: PayloadAction<any | AuthState['userDetails']>,
    ) {
      console.log('action', action.payload);
      state.lastSignedIn = action.payload;
    },
    updateOnboardedState(
      state,
      action: PayloadAction<any | AuthState['isOnboarded']>,
    ) {
      console.log('action', action.payload);
      state.isOnboarded = action.payload;
    },
    updateUserLoggedIn(
      state,
      action: PayloadAction<any | AuthState['userLoggedIn']>,
    ) {
      state.userLoggedIn = action.payload;
    },
    logOut: state => {
      // state = initialState;
      state.userLoggedIn = null;
      state.accessToken = null;
      state.sessionId = null;
      state.preloginSessionId = null;
      state.accountToken = null;
      state.userDetails = null;
      state.isAutoVerified = false;
      state.isBiometricEnabled = null;
      state.biometricAttempts = null;
      // clearAuthToken();
    },
    signOut: state => {
      // deleteCmsCache();
      console.log(`user signed out ***8`);
      state.userLoggedIn = false;
      state.accessToken = null;
      state.sessionId = null;
      state.preloginSessionId = null;
    },
    updateInitHeaders: (
      state,
      action: PayloadAction<any | AuthState['initHeaders']>,
    ) => {
      state.initHeaders = action.payload;
    },
    updateCommonHeaders: (
      state,
      action: PayloadAction<any | AuthState['commonHeaders']>,
    ) => {
      state.commonHeaders = action.payload;
    },
    updateUserAuthToken(state, action: PayloadAction<any | undefined>) {
      console.log('action', action.payload);
      state.userAuthToken = action.payload?.userAuthToken;
    },
    updateIsBiometricEnabled(state, action: PayloadAction<any | undefined>) {
      console.log('action isBiometricEnabled', action.payload);
      state.isBiometricEnabled = action.payload;
    },
    updateBiometricAttempts(state, action: PayloadAction<any | undefined>) {
      console.log('updateBiometricAttempts', action.payload);
      state.biometricAttempts = action.payload;
    },
    updateAccountToken(state, action: PayloadAction<any | undefined>) {
      console.log('action', action.payload);
      state.accountToken = action.payload;
    },
  },
});

export const {
  updateToken,
  logOut,
  updateSessionId,
  updateUserDetails,
  updateUserLoggedIn,
  updateAutoVerified,
  signOut,
  updateOnboardedState,
  updateLastSignedIn,
  updateInitHeaders,
  updateCommonHeaders,
  updatePreLoginSessionId,
  updateUserAuthToken,
  updateIsBiometricEnabled,
  updateBiometricAttempts,
  updateAccountToken,
} = authSlice.actions;

export const selectOnboardedState = (state: RootState) =>
  state.auth.isOnboarded;

export const selectAccessToken = (state: RootState) => state.auth.accessToken;

export const selectSessionId = (state: RootState) => state.auth.sessionId;
export const selectPreloginSessionId = (state: RootState) =>
  state.auth.preloginSessionId;

export const selectUserLoggedIn = (state: RootState) => state.auth.userLoggedIn;

export const selectUserDetails = (state: RootState) => state.auth.userDetails;
export const selectIsAutoVerified = (state: RootState) =>
  state.auth.isAutoVerified;

export const selectLastSignedIn = (state: RootState) => state.auth.lastSignedIn;

export const selectUserAuthToken = (state: RootState) =>
  state.auth.userAuthToken;

export const selectIsBiometricEnabled = (state: RootState) =>
  state.auth.isBiometricEnabled;
export const selectBiometricAttempts = (state: RootState) =>
  state.auth.biometricAttempts;

// export const selectOnboardedState = (state: RootState) =>
//   state.auth.userDetails;

const persistConfig: PersistConfig<any> = {
  key: 'rtk:auth',
  // storage: mmkvStorage,
  storage: AsyncStorage,
  whitelist: [
    'accessToken',
    'sessionId',
    'preloginSessionId',
    'userDetails',
    'isAutoVerified',
    'userLoggedIn',
    'isOnboarded',
    'lastSignedIn',
    'isBiometricEnabled',
    'biometricAttempts',
    'accountToken',
  ],
};

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
