const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('TerraTrip Backend is running!');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
