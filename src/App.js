import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { uiActions } from './store/ui-slice';

function App() {
  const dispatch = useDispatch();
  const cartIsVisible = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart.items);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    const updateCart = async () => {
      dispatch(
        uiActions.showNotification({
          status: 'pending',
          title: 'Loading...',
          message: 'Sending cart data. Please wait some time.',
        })
      );

      await fetch(
        'https://react-redux2-practicing-default-rtdb.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        }
      );
    };
    updateCart()
      .then(() => {
        dispatch(
          uiActions.showNotification({
            status: 'success',
            title: 'Success!',
            message: 'Cart updated Successfully',
          })
        );
      })
      .catch(() => {
        dispatch(
          uiActions.showNotification({
            status: 'error',
            title: 'Error!',
            message: 'Oops! Something went wrong :(',
          })
        );
      });
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {cartIsVisible && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
