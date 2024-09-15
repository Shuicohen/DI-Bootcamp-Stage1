const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Import book routes
const bookRouter = require('./routes/books.js');

// Use the book routes
app.use('/books', bookRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
