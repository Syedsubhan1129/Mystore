import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import ProductCard from './productCard';
import Spinner from 'react-bootstrap/Spinner';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchResults() {
  const query = useQuery().get('q');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query) return;
    setIsLoading(true);
    axios
      .get(`https://dummyjson.com/products/search?q=${query}`)
      .then((res) => setResults(res.data.products))
      .finally(() => setIsLoading(false));
  }, [query]);

  if (!query) return <p className="p-4">Enter a search term.</p>;
  if (isLoading) return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh'}}>
        <Spinner animation="border" role="status" >
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    </div>
  );;

  return (
    <div className="container py-3">
      <h2 className="mb-4">Results for “{query}”</h2>
      {results.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <div className="row row-cols-2 row-cols-md-4 g-3">
          {results.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResults;
