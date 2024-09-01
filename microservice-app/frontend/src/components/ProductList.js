import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';

const ProductList = ({ onSelectProduct }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Product List</h2>
      <div className="row">
        {products.map(product => (
          <div className="col-md-4 mb-3" key={product._id}>
            <Card>
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  {product.description}
                  <br />
                  <strong>${product.price.toFixed(2)}</strong>
                </Card.Text>
                <Button variant="primary" onClick={() => onSelectProduct(product)}>
                  Order Now
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
