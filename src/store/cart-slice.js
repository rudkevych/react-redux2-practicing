import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
  items: [{
    title: 'hello',
    description: 'helloo',
    price: 10,
    id: 1,
    quantity: 3,
    total: 30
  }],
  totalQuantity: 0
};
const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addItem(state, action) {
      const itemToAdd = action.payload;

      state.totalQuantity++;
    },
    removeItem(state, action) {
      const id = action.payload.id;
    }
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
