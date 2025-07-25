import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import ProductSlider from './productSlider';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`).then((res) => {
      setProduct(res.data);
    });
  }, [id]);

  if (!product) return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh'}}>
        <Spinner animation="border" role="status" >
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    </div>
  );
  
  return (
    <div style={{ padding: '2rem' }}>
      <div style={{ display:'flex', justifyContent:'center', alignItems: 'center', flexDirection:'column',marginBottom:'20px'}}>
        <h2>{product.title}</h2>
        {product.images && Array.isArray(product.images) && product.images.length > 1 ? (
          <ProductSlider images={product.images} />
        ) : (
          <img src={product.thumbnail} alt={product.title} width="300" />
        )}
      </div>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Price:</strong> ₹{Math.round(product.price * 86)}</p>
      <p><strong>Availability: </strong>{product.availabilityStatus}</p>
      <p><strong>Brand:</strong> {product.brand}</p>
      <p><strong>Discount: </strong>{product.discountPercentage}%</p>
      <p><strong>Rating: ⭐ </strong>{product.rating}</p>
      <p><strong>WarrantyInfo: </strong>{product.warrantyInformation}</p>
      <p><strong>ShippingInfo: </strong>{product.shippingInformation}</p>
      <h4>Reviews:</h4>
        {Array.isArray(product.reviews) && product.reviews.length > 0 ? (
            <ul>
                {product.reviews.map((review, index) => (
                <li key={index}>
                    <p><strong>{review.reviewerName}</strong> ({review.rating}⭐)</p>
                    <p>{review.comment}</p>
                    <small>{new Date(review.date).toLocaleDateString()}</small>
                </li>
                ))}
            </ul>
            ) : (
  <p>No reviews available.</p>
)}


      <p><strong>ReturnPolicy: </strong>{product.returnPolicy}</p>
    </div>
  );
}

export default ProductDetails;
