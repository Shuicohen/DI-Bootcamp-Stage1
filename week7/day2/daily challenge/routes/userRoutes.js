const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUser);
router.put('/users/:id', userController.updateUser);

module.exports = router;