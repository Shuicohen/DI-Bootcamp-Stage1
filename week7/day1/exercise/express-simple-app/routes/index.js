const express = require('express');
const router = express.Router();

// Define your routes
router.get('/', (req, res) => { 
    res.send('Welcome to the homepage!');
});

router.get('/about', (req, res) => {
    res.send('This is the About Us page.');
});

module.exports = router;