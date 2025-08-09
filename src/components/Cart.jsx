import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

export default function Cart() {
  const cart = useSelector(state => state.cart || []);
  const total = cart.reduce((s, i) => s + (i.price || 0) * (i.quantity || 0), 0);

  return (
    <div style={{padding:20}}>
      <h1>Your Cart</h1>
      {cart.length === 0 ? <p>Cart is empty</p> : (
        <>
          {cart.map(item => <CartItem key={item.id} item={item} />)}
          <div style={{marginTop:12}}>Total: ₹{total}</div>
          <Link to="/checkout"><button style={{marginTop:8}}>Checkout</button></Link>
        </>
      )}
    </div>
  );
}
