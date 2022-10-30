import { createSlice } from '@reduxjs/toolkit';

const uiInitialState = {
  cartIsVisible: false,
  notification: null
};

const uiSlice = createSlice({
  name: 'ui',
  initialState: uiInitialState,
  reducers: {
    toggleCartView(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action) {
      const notification = action.payload;
      state.notification = notification;
    }
  },
});

export const uiActions = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
