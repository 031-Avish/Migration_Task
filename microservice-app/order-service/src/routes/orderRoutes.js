// src/routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const orderController = require('../controllers/OrderController');

router.post('/orders', orderController.createOrder);

module.exports = router;
