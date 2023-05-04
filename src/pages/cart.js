import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../components/Cart';

const Cart = () => {
  const cartItems = useSelector(state => state.cart);

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
      <div>Total: ${totalPrice}</div>
      <button>Checkout</button>
    </div>
  );
};

export default Cart;
