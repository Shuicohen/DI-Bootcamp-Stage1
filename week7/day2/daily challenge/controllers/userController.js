const bcrypt = require('bcrypt');
const { createUser, getUserById, getAllUsers, updateUserById, getUserByUsername, addUserWithHash } = require('../models/userModel');

// POST /register
const register = async (req, res) => {
  try {
    const { email, username, first_name, last_name, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    await createUser({ email, username, first_name, last_name });
    await addUserWithHash(username, hashedPassword);

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// POST /login
const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await getUserByUsername(username);

    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const match = await bcrypt.compare(password, user.password);
    if (match) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(400).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// GET /users
const getUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// GET /users/:id
const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await getUserById(id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// PUT /users/:id
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userUpdates = req.body;

    const updatedUser = await updateUserById(id, userUpdates);

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  register,
  login,
  getUsers,
  getUser,
  updateUser
};
