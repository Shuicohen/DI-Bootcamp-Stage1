require('dotenv').config(); 
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const authRouter = require('./routes/auth');
const authenticateJWT = require('./middleware/authenticateJWT');

const app = express();

app.use(cookieParser());
app.use(bodyParser.json()); 


app.get('/', (req, res) => {
  res.send('Welcome to JWT Authentication');
});


app.use('/auth', authRouter);


app.get('/protected', authenticateJWT, (req, res) => {
  res.json({ message: 'You are authorized', user: req.user });
});


app.post('/logout', (req, res) => {
  res.clearCookie('token');
  res.clearCookie('refreshToken');
  res.json({ message: 'Logged out successfully' });
});


app.listen(3000, () => {
  console.log('Server running on port 3000');
});
