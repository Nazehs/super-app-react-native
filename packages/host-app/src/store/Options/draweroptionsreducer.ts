import {PayloadAction, createSlice} from '@reduxjs/toolkit';

type initialStateType = {
  swipeEnabled: boolean;
};

const initialState: initialStateType = {
  swipeEnabled: false,
};

const slice = createSlice({
  name: 'draweroptions',
  initialState: initialState,
  reducers: {
    setSwipeEnabled: (
      state,
      action: PayloadAction<initialStateType['swipeEnabled']>,
    ) => {
      state.swipeEnabled = action.payload;
    },
  },
});

const {actions, reducer: draweroptionreducer} = slice;

export const {setSwipeEnabled} = actions;

export default draweroptionreducer;
