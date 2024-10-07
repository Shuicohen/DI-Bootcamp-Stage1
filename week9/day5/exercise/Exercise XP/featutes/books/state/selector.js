import { createSelector } from '@reduxjs/toolkit';

export const selectBooks = (state) => state.bookReducer.books;

export const selectedHorrorBooks = createSelector(
  [selectBooks],
  (books) => books ? books.filter((book) => book.genre === 'Horror') : []
);

export const selectedFantasyBooks = createSelector(
  [selectBooks],
  (books) => books ? books.filter((book) => book.genre === 'Fantasy') : []
);

export const selectedScienceFictionBooks = createSelector(
  [selectBooks],
  (books) => books ? books.filter((book) => book.genre === 'Science Fiction') : []
);
