const axios = require('axios');
const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
  const { productId, quantity } = req.body;

  try {
    // Replace with the actual URL of the product service
    const productServiceUrl = 'http://product-service:5001/api/products';


    // Fetch all products from the product service
    const response = await axios.get(productServiceUrl);
    const products = response.data;

    // Find the product by ID
    const product = products.find(p => p._id.toString() === productId);

    if (!product) return res.status(404).json({ message: 'Product not found' });

    // Calculate the total price
    const totalPrice = product.price * quantity;

    // Create a new order
    const order = new Order({ productId, quantity, totalPrice });
    await order.save();

    res.status(201).json(order);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: err.message });
  }
};
