import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

export default function ProductItem({ product }) {
  const dispatch = useDispatch();
  return (
    <article className="product-card">
      <Link to={`/product/${product.id}`} className="product-link">
        <img src={product.thumbnail} alt={product.title} />
        <h3>{product.title}</h3>
      </Link>
      <p>₹{product.price}</p>
      <button onClick={() => dispatch(addToCart(product))}>Add to cart</button>
    </article>
  );
}

ProductItem.propTypes = { product: PropTypes.object.isRequired };
