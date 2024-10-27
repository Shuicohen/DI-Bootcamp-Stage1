const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();
let users = []; 
const JWT_SECRET = process.env.JWT_SECRET;


router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  const userExists = users.find(u => u.username === username);
  if (userExists) return res.status(400).json({ message: 'Username already exists' });

  try {
    
    const hashedPassword = await bcrypt.hash(password, 10);

    
    users.push({ username, password: hashedPassword });
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });
    const refreshToken = jwt.sign({ username }, JWT_SECRET, { expiresIn: '7d' });

    
    res.cookie('refreshToken', refreshToken, { httpOnly: true });
    res.cookie('token', token, { httpOnly: true });
    res.json({ message: 'User registered successfully', token });
  } catch (error) {
    return res.status(500).json({ message: 'Error during registration', error: error.message });
  }
});


router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  const user = users.find(u => u.username === username);
  if (!user) return res.status(400).json({ message: 'User not found' });

  try {
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(400).json({ message: 'Invalid password' });

    
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });
    const refreshToken = jwt.sign({ username }, JWT_SECRET, { expiresIn: '7d' });

    
    res.cookie('refreshToken', refreshToken, { httpOnly: true });
    res.cookie('token', token, { httpOnly: true });
    res.json({ message: 'Logged in successfully', token });
  } catch (error) {
    return res.status(500).json({ message: 'Error during login', error: error.message });
  }
});


router.post('/refresh', (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) return res.status(403).json({ message: 'No refresh token provided' });

  jwt.verify(refreshToken, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid refresh token' });

    
    const newAccessToken = jwt.sign({ username: user.username }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ accessToken: newAccessToken });
  });
});

module.exports = router;
