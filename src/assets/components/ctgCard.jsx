import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function CtgCard({ category }) {
  return (
    <Link to={`/category/${category.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Card
        style={{
          width: '15rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
        }}>
        <Card.Body>
          <Card.Title>
            {category.name || category.slug}
          </Card.Title>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default CtgCard;
