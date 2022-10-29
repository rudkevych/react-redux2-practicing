import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
  items: [],
  totalQuantity: 100
};
const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {},
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
