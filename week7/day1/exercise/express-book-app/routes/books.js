const express = require('express');
const router = express.Router();

// In-memory database for books
let books = [];
let id = 1;

// Get all books
router.get('/', (req, res) => {
    res.json(books);
});

// Add a new book
router.post('/', (req, res) => {
    const newBook = { id: id++, title: req.body.title, author: req.body.author };
    books.push(newBook);
    res.status(201).json(newBook);
});

// Update a book by ID
router.put('/:id', (req, res) => {
    const bookId = parseInt(req.params.id, 10);
    const book = books.find(b => b.id === bookId);

    if (book) {
        book.title = req.body.title || book.title;
        book.author = req.body.author || book.author;
        res.json(book);
    } else {
        res.status(404).json({ error: 'Book not found' });
    }
});

// Delete a book by ID
router.delete('/:id', (req, res) => {
    const bookId = parseInt(req.params.id, 10);
    books = books.filter(b => b.id !== bookId);
    res.sendStatus(204).send();
});

module.exports = router;