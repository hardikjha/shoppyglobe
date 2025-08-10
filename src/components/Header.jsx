import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';

export default function Header() {
  const cart = useSelector(state => state.cart || []);
  const totalItems = cart.reduce((s, i) => s + (i.quantity || 0), 0);

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="brand">
          <img src="/assets/logo.PNG" alt="ShoppyGlobe Logo" className="logo" />
          ShoppyGlobe
        </Link>
        <div className="nav-right">
          <Link to="/cart" className="cart-link" aria-label="View cart">
            <span className="cart-icon-wrapper">
              <FaShoppingCart className="cart-icon" size={22} />
              <span className="cart-count">{totalItems}</span>
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
