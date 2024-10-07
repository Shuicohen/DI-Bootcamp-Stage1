import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    { id: 1, title: 'The Shining', author: 'Stephen King', genre: 'Horror' },
    { id: 2, title: '1984', author: 'George Orwell', genre: 'Science Fiction' },
    { id: 3, title: 'Harry Potter', author: 'J.K. Rowling', genre: 'Fantasy' },
    { id: 4, title: 'Dune', author: 'Frank Herbert', genre: 'Science Fiction' },
    { id: 5, title: 'Lord of the Rings', author: 'J.R.R. Tolkien', genre: 'Fantasy' },
    { id: 6, title: 'Dracula', author: 'Bram Stoker', genre: 'Horror' },
  ],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
});



export default booksSlice.reducer;
