const db = require('../config/db.js');

const getAllBooks = () => db('books');
const getBookById = (id) => db('books').where({id});
const createBook = (title, author) => db('books').insert({title, author}, ['id', 'title', 'author']);
const updateBook = (id, title, author) => db('books').where({id}).update({title, author}, ['id', 'title', 'author']);
const deleteBook = (id) => db('books').where({id}).del();

module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook
};