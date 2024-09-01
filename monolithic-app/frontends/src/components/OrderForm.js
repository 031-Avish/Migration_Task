import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, Container } from 'react-bootstrap';

const OrderForm = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/orders', {
        productId: product._id,
        quantity,
      });
      setMessage('Order placed successfully!');
    } catch (error) {
      setMessage('Error placing order');
      console.error('Error placing order', error);
    }
  };

  return (
    <Container className="mt-4">
      <h2>Order Form</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formQuantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Place Order
        </Button>
        {message && <div className="mt-2">{message}</div>}
      </Form>
    </Container>
  );
};

export default OrderForm;
