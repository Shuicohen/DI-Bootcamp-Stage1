const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes.js');
require('dotenv').config();

app.use(express.json());
app.use('/api', userRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
