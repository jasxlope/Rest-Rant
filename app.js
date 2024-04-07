// app.js

const express = require('express');
const app = express();
const restaurantRoutes = require('./routes');
const restaurantController = require('./controllers/restaurantController');

// Middleware
app.use(express.json());

// Routes
app.use('/api', restaurantRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
