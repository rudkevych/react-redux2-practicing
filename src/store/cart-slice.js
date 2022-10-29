import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
  items: [],
  totalQuantity: 0
};
const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addItem(state, action) {
      const itemToAdd = action.payload;
      console.log(itemToAdd);

      const foundItem = state.items.find(item => item.id === itemToAdd.id);
      if(!foundItem) {
        itemToAdd.quantity = 1;
        itemToAdd.total = itemToAdd.price;
        state.items.push(itemToAdd);
      } else {
        foundItem.quantity +=1;
        foundItem.total += foundItem.price;
      }
      state.totalQuantity++;
    },
    removeItem(state, action) {
      const id = action.payload.id;
    }
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
