import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

export default function Cart() {
  const cart = useSelector(state => state.cart || []);
  const total = cart.reduce((sum, item) => sum + (item.price || 0) * (item.quantity || 0), 0);

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h1>Your Cart</h1>
        {cart.length === 0 ? (
         <p>Cart is empty</p>
       ) : (
        <>
          {cart.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
          <div style={{ marginTop: 12, fontSize: '1.2rem' }}>
            Total: ₹{total}
          </div>
          <Link to="/checkout">
            <button className="btn-gradient" style={{ marginTop: 12 }}>
              Proceed to Checkout
            </button>
          </Link>
        </>
      )}
      </div>
    </div>  
  );
}
