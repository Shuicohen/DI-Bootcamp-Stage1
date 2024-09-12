const express = require('express');

const app = express();
app.use(express.json());

// Listen on port 5000
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

let books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publishedYear: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', publishedYear: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', publishedYear: 1949 }
];

// GET all books
app.get('/api/books', (req, res) => {
    res.json(books);
});

// GET a book by ID
app.get('/api/books/:id', (req, res) => {
    const {id} = req.params;
    const book = books.find((item) => item.id == id);
    
    if (book) {
        res.status(200).json(book);
    } else {
        res.status(404).json({message: 'Book not found'});
    }
});

// POST a new book
app.post('/api/books', (req, res) => {
    const {title, author, publishedYear} = req.body;
    const newBook = {id: books.length + 1, title, author, publishedYear};
    books.push(newBook);
    res.status(201).json(newBook);
});