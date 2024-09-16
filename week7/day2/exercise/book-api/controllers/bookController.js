const Book = require('../models/bookModel.js');

const getAllBooks = async (req, res) => {
    try {
        const books = await Book.getAllBooks();
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const getBookById = async (req, res) => {
    const { bookId } = req.params;
    try {
        const book = await Book.getBookById(bookId);
        if (book) {
            res.json(book);
        } else {
            res.status(404).json({ message: 'Book not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const createBook = async (req, res) => {
    const { title, author, publishedYear } = req.body;
    try {
        const [newBook] = await Book.createBook({ title, author, publishedYear });
        res.status(201).json(newBook);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const updateBook = async (req, res) => {
    const { bookId } = req.params;
    const { title, author, publishedYear } = req.body;
    try {
        const [updatedBook] = await Book.updateBook(bookId, { title, author, publishedYear });
        if (updatedBook) {
            res.json(updatedBook);
        } else {
            res.status(404).json({ message: 'Book not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const deleteBook = async (req, res) => {
    const { bookId } = req.params;
    try {
        const deleted = await Book.deleteBook(bookId);
        if (deleted) {
            res.json({ message: 'Book deleted' });
        } else {
            res.status(404).json({ message: 'Book not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook,
};
