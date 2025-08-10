import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/cartSlice';

export default function CartItem({ item }) {
  const dispatch = useDispatch();
  return (
    <div className="cart-item" style={{display:'flex', gap:12, padding:8, borderBottom:'1px solid #eee'}}>
      <img src={item.thumbnail} alt={item.title} width="70" />
      <div style={{flex:1}}>
        <h4>{item.title}</h4>
        <p>₹{item.price} x {item.quantity}</p>
        <div>
          <button 
            className="btn-gradient btn-small"
            onClick={() => dispatch(updateQuantity({ id: item.id, quantity: Math.max(1, item.quantity - 1) }))}
          >
            -
          </button>

          <button 
            className="btn-gradient btn-small"
            onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
          >
            +
          </button>

          <button 
            className="btn-gradient btn-small"
            onClick={() => dispatch(removeFromCart(item.id))}
            style={{ marginLeft: 8 }}
          >
            Remove
          </button>

        </div>
      </div>
    </div>
  );
}
