import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
  isOpen: false,
};
const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {},
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
