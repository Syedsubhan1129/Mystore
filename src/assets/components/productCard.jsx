import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <Card className="h-100">
      <Link to={`/product/${product.id}`} className="text-decoration-none text-dark">
        <Card.Img
          variant="top"
          src={product.thumbnail}
          alt={product.title}
          style={{ objectFit: 'cover', height: '200px' }}
        />
        <Card.Body>
          <Card.Title className="fs-6">{product.title}</Card.Title>
          <Card.Text className="mb-1">Price:s ₹{Math.round(product.price * 86)}</Card.Text>
          <Card.Text className="mb-0">Rating: ⭐ {product.rating}</Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
}

export default ProductCard;
