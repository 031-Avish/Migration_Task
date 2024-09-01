const mongoose = require('mongoose');
const Product = require('./src/models/Product'); // Assuming this is your Product model

const products = [
  {
    name: "Product 1",
    description: "Description for product 1",
    price: 10.99
  },
  {
    name: "Product 2",
    description: "Description for product 2",
    price: 12.99
  },
  {
    name: "Product 3",
    description: "Description for product 3",
    price: 15.99
  }
];

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(async () => {
  console.log("MongoDB connected");

  const count = await Product.countDocuments();
  if (count === 0) {
    await Product.insertMany(products);
    console.log("Products have been inserted successfully");
  } else {
    console.log("Products already exist, skipping insertion");
  }

  mongoose.disconnect();
}).catch(err => {
  console.error("MongoDB connection error:", err);
});
