const express = require('express');
const fs = require('fs-extra');
const path = require('path');
const app = express();

const tasksRouter = require('./routes/tasks.js');

app.use(express.json());

app.use('/tasks', tasksRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
