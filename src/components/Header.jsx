import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const cart = useSelector(state => state.cart || []);
  const totalItems = cart.reduce((s, i) => s + (i.quantity || 0), 0);

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="brand">ShoppyGlobe</Link>
        <div className="nav-right">
          <Link to="/cart">Cart ({totalItems})</Link>
        </div>
      </nav>
    </header>
  );
}
