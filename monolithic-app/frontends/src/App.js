// src/App.js
import React, { useState } from 'react';
import ProductList from './components/ProductList';
import OrderForm from './components/OrderForm';
import { Container } from 'react-bootstrap';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <Container>
      <h1 className="my-4">Product and Order Management</h1>
      {!selectedProduct ? (
        <ProductList onSelectProduct={setSelectedProduct} />
      ) : (
        <OrderForm product={selectedProduct} />
      )}
    </Container>
  );
}

export default App;
