const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Import routes
const todoRouter = require('./routes/todos.js');

// Use routes
app.use('/todos', todoRouter);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});