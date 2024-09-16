const db = require('../config/db.js');

const createUser = async (user) => {
  const { email, username, first_name, last_name } = user;
  const [newUser] = await db('users').insert({ email, username, first_name, last_name }).returning('*');
  return newUser;
};

const getUserById = async (id) => {
  const user = await db('users').where({ id }).first();
  return user;
};

const getAllUsers = async () => {
  const users = await db('users').select('*');
  return users;
};

const updateUserById = async (id, userUpdates) => {
  const [updatedUser] = await db('users').where({ id }).update(userUpdates).returning('*');
  return updatedUser;
};

const getUserByUsername = async (username) => {
  const user = await db('hashpwd').where({ username }).first();
  return user;
};

const addUserWithHash = async (username, password) => {
  const [newUser] = await db('hashpwd').insert({ username, password }).returning('*');
  return newUser;
};

module.exports = {
  createUser,
  getUserById,
  getAllUsers,
  updateUserById,
  getUserByUsername,
  addUserWithHash
};
