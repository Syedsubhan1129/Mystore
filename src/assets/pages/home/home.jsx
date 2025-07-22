import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './home.css';
import AdaptiveSlider from '../../components/slider/AdaptiveSlider';
import CtgCard from '../../components/ctgCard';
import ProductCard from '../../components/productCard';
import Accordion from 'react-bootstrap/Accordion';
import Spinner from 'react-bootstrap/Spinner';

function Home() {
  const [storeProduct, setStoreProduct] = useState([]);
  const [storeCtg, setStoreCtg] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getAll() {
      try {
        const [prodRes, ctgRes] = await Promise.all([
          axios.get('https://dummyjson.com/products'),
          axios.get('https://dummyjson.com/products/categories')
        ]);
        setStoreProduct(prodRes.data.products);
        setStoreCtg(ctgRes.data);
      } finally {
        setIsLoading(false);
      }
    }
    getAll();
  }, []);

  if (isLoading) return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh'}}>
        <Spinner animation="border" role="status" >
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    </div>
  );

  return (
    <div className="container py-3">
      <AdaptiveSlider />

      <h2 className="mt-4 mb-3">Categories</h2>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="1">
          <Accordion.Header>Categories</Accordion.Header>
          <Accordion.Body>
            <div className="row row-cols-2 row-cols-md-4 g-3">
                {storeCtg.map((c) => (
                    <CtgCard key={c} category={c} />
                ))}
             </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      

      <h2 className="mt-5 mb-3">Latest Products</h2>
      
            <div className="row row-cols-2 row-cols-md-4 g-3">
              {storeProduct.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          
    </div>
  );
}

export default Home;
