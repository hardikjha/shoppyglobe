import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => { if (!res.ok) throw new Error('Failed to fetch'); return res.json(); })
      .then(json => setProduct(json))
      .catch(err => setError(err.message));
  }, [id]);

  if (error) return <div className="product-detail-container">Error: {error}</div>;
  if (!product) return <div className="product-detail-container">Loading...</div>;

  return (
    <div className="product-detail-container">
      <div className="product-detail-image">
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <div className="product-detail-info">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <div className="product-detail-price">₹{product.price}</div>
        <button 
          className="btn-add-to-cart"
          onClick={() => dispatch(addToCart(product))}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
