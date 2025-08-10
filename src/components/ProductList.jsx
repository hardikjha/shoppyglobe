import React, { useState, useEffect } from 'react';
import useFetchProducts from '../hooks/useFetchProducts';
import ProductItem from './ProductItem';

export default function ProductList() {
  const { data: products, error } = useFetchProducts('https://dummyjson.com/products');
  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    if (!products) return;
    setFiltered(products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())));
  }, [products, query]);

  if (error) return <div>Error: {error}</div>;
  if (!products || products.length === 0) return <div>Loading products...</div>;

  return (
    <section>
      <input
        placeholder="Search products..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        style={{padding:'8px', width:'100%', maxWidth:400, marginBottom:12, borderRadius:'12px'}}
      />
      <div className="product-grid">
        {filtered.map(p => <ProductItem key={p.id} product={p} />)}
      </div>
    </section>
  );
}
