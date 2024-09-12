const express = require('express');

const app = express();  
app.use(express.json());

const PORT = 3001

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

let posts = [
    { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
    { id: 2, title: 'Second Post', content: 'This is the content of the second post.' }
];

// GET /posts: Get all posts
app.get('/posts', (req, res) => {
    res.json(posts);
});

// GET /posts/:id: Get a post by ID
app.get('/posts/:id', (req, res) => {
    const {id} = req.params;
    const post = posts.find((item) => item.id == id);
    if (!post) return res.sendStatus(404);//.json({message: 'Post not found'});
    res.json(post);
});

// POST /posts: Create a new post
app.post('/posts/:id', (req, res) => {
    const {title, content} = req.body;
    const newPost = {title, content, id: posts.length + 1};
    posts.push(newPost);
    res.json(newPost);
});

// PUT /posts/:id: Update a post
app.put('/posts/:id', (req, res) => {
    const {id} = req.params;
    const {title, content} = req.body;
    const index = posts.findIndex((item) => item.id == id);
    if(index === -1) {
        return res.status(404).json({message: 'Post not found'});
    }
    posts[index] = {...posts[index], title, content};
    res.json({posts, active:true, status:3});
});

// DELETE /posts/:id: Delete a post
app.delete('/posts/:id', (req, res) => {
    const {id} = req.params;
    const index = posts.findIndex((item) => item.id == id);
    if(index === -1) {
        return res.status(404).json({message: 'Post not found'});
    }
    posts.splice(index, 1);
    res.json(posts);
});

// Error handling for invalid routes
app.use((req, res) => {
    res.status(404).send('Route not found');
});