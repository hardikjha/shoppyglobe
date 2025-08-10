import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
  const navigate = useNavigate();

  return (
    <div className="cart-container checkout-page">
      <h2>Checkout</h2>
      <p>Integrate payment / order form here.</p>

      <button className="btn-gradient">Submit Order</button>
      <button 
        className="btn-gradient" 
        style={{ marginLeft: 8 }}
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
    </div>
  );
}
