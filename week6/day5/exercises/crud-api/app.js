const express = require('express');
const {fetchPosts} = require('./data/dataService.js');

const app = express();
app.use(express.json());

// Endpoint to fetch posts from JSONPlaceholder
app.get('/api/posts', async (req, res) => {
    try {
        const posts = await fetchPosts();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving posts' });
    }
});

// Listen on port 5000
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});