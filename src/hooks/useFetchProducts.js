import { useState, useEffect } from 'react';

const useFetchProducts = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch products');
        return res.json();
      })
      .then(json => { if (mounted) setData(json.products || []); })
      .catch(err => { if (mounted) setError(err.message); });

    return () => { mounted = false; }
  }, [url]);

  return { data, error };
};

export default useFetchProducts;
