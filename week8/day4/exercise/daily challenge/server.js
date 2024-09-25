const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// GET request to /api/hello
app.get('/api/hello', (req, res) => {
  res.send({ message: 'Hello From Express' });
});

// POST request to /api/world
app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(`I received your POST request. This is what you sent me: ${req.body.post}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
