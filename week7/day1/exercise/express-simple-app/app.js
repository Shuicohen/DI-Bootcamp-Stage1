const express = require('express');
const app = express();

const port = 3000;

// Import routes
const indexRouter = require('./routes/index.js');

// Use routes
app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});