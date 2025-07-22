import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import ProductCard from '../productCard';
import Spinner from 'react-bootstrap/Spinner';

function CategoryProducts() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!category) return;
    setIsLoading(true);
    axios
      .get(`https://dummyjson.com/products/category/${category}`)
      .then((res) => setProducts(res.data.products))
      .finally(() => setIsLoading(false));
  }, [category]);

  if (isLoading) return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh'}}>
        <Spinner animation="border" role="status" >
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    </div>
  );

  return (
    <div className="container py-3">
      <h2 className="mb-4 text-capitalize">{category}</h2>
      <div className="row row-cols-2 row-cols-md-4 g-3">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

export default CategoryProducts;
