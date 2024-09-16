const express = require('express');
const dotenv = require('dotenv');
const postRoutes = require('./routes/postRoutes.js');

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use('/posts', postRoutes);

// Error handling for invalid routes
app.use((req, res, next) => {
    res.status(404).json({ message: 'Route not found' });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
