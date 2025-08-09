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
    let mounted = true;
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => { if (!res.ok) throw new Error('Failed to fetch'); return res.json(); })
      .then(json => { if (mounted) setProduct(json); })
      .catch(err => { if (mounted) setError(err.message); });
    return () => { mounted = false; }
  }, [id]);

  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Loading...</div>;

  return (
    <div style={{padding:20}}>
      <img src={product.thumbnail} alt={product.title} style={{maxWidth:300}} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>₹{product.price}</p>
      <button onClick={() => dispatch(addToCart(product))}>Add to cart</button>
    </div>
  );
}
