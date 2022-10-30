import { createSlice } from '@reduxjs/toolkit';
import { uiActions } from './ui-slice';

const initialCartState = {
  items: [],
  totalQuantity: 0,
};
const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addItem(state, action) {
      const itemToAdd = action.payload;
      const foundItem = state.items.find((item) => item.id === itemToAdd.id);
      if (!foundItem) {
        itemToAdd.quantity = 1;
        itemToAdd.total = itemToAdd.price;
        state.items.push(itemToAdd);
      } else {
        foundItem.quantity += 1;
        foundItem.total += foundItem.price;
      }
      state.totalQuantity++;
    },
    removeItem(state, action) {
      const id = action.payload;

      const foundItem = state.items.find((item) => item.id === id);

      if (foundItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        foundItem.quantity--;
        foundItem.total -= foundItem.price;
      }
      state.totalQuantity--;
    },
  },
});

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Loading...',
        message: 'Sending cart data. Please wait some time.',
      })
    );

    const updateCart = async () => {
      await fetch(
        'https://react-redux2-practicing-default-rtdb.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        }
      );
    };

    try {
      updateCart();

      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Cart updated successfully',
        })
      );
    } catch {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Oops! Something went wrong :(',
        })
      );
    }
  };
};

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
