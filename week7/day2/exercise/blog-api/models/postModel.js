const db = require('../config/db.js');

const getAllPosts = () => db('posts');
const getPostById = (id) => db('posts').where({id});
const createPost = (title, content) => db('posts').insert({title, content}, ['id', 'title', 'content']);
const updatePost = (id, title, content) => db('posts').where({id}).update({title, content}, ['id', 'title', 'content']);
const deletePost = (id) => db('posts').where({id}).del();

module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost
};