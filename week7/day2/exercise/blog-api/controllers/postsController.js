const Post = require('../models/postModel.js');

const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.getAllPosts();
        res.json(posts);
    } catch (error) {
        res.status(500).json({message: 'Server error'});
    }
};

const getPostById = async (req, res) => {
    const {id} = req.params;
    try {
        const post = await Post.getPostById(id);
        if (post) {
            res.json(post);
        } else {
            res.status(404).json({message: 'Post not found'});
        }
    } catch (error) {
        res.status(500).json({message: 'Server error'});
    }
};

const createPost = async (req, res) => {
    const { title, content } = req.body;
    try {
        const [newPost] = await Post.createPost({ title, content });
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    try {
        const [updatedPost] = await Post.updatePost(id, { title, content });
        if (updatedPost) {
            res.json(updatedPost);
        } else {
            res.status(404).json({ message: 'Post not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const deletePost = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await Post.deletePost(id);
        if (deleted) {
            res.json({ message: 'Post deleted' });
        } else {
            res.status(404).json({ message: 'Post not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
};