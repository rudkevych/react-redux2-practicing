import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const items = useSelector((state) => state.cart.items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {!items.length && <p>Cart is empty :(</p>}
      {items.length > 0 && (
        <ul>
          {items.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
        </ul>
      )}
    </Card>
  );
};

export default Cart;
