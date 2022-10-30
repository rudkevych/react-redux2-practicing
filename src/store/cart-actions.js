import { cartActions } from './cart-slice';
import { notificationTypes } from './notification-types';
import { uiActions } from './ui-slice';

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(uiActions.showNotification(notificationTypes.pending));

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
      dispatch(uiActions.showNotification(notificationTypes.success));
    } catch {
      dispatch(uiActions.showNotification(notificationTypes.error));
    }
  };
};

export const getCartData = (cart) => {
  return async (dispatch) => {
    dispatch(uiActions.showNotification(notificationTypes.pending));

    const updateCart = async () => {
      const response = await fetch(
        'https://react-redux2-practicing-default-rtdb.firebaseio.com/cart.json'
      );
      const data = await response.json();
      return data;
    };

    try {
      const result = await updateCart();
      dispatch(cartActions.replaceCart(result));
      dispatch(uiActions.showNotification(notificationTypes.success));
    } catch {
      dispatch(uiActions.showNotification(notificationTypes.error));
    }
  };
};
