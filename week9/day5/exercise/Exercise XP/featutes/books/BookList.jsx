import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectBooks, selectedHorrorBooks, selectedFantasyBooks, selectedScienceFictionBooks } from './state/selector';

const BookList = () => {
    const [selectedGenre, setSelectedGenre] = useState('All');
    const books = useSelector(selectBooks) || [];
    const horrorBooks = useSelector(selectedHorrorBooks) || [];
    const fantasyBooks = useSelector(selectedFantasyBooks) || [];
    const scienceFictionBooks = useSelector(selectedScienceFictionBooks) || [];
    
    const handleGenreChange = (e) => {
        setSelectedGenre(e.target.value);
    };

    const getBooksByGenre = () => {
        let filteredBooks;
        switch (selectedGenre) {
            case 'Horror':
                filteredBooks = horrorBooks;
                break;
            case 'Fantasy':
                filteredBooks = fantasyBooks;
                break;
            case 'Science Fiction':
                filteredBooks = scienceFictionBooks;
                break;
            default:
                filteredBooks = books;
        } 
        return filteredBooks;
    };
    
    
    return (
        <div>
            <h2>Book Inventory</h2>
            <select onChange={handleGenreChange} value={selectedGenre}>
                <option value="All">All</option>
                <option value="Horror">Horror</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Science Fiction">Science Fiction</option>
            </select>
            <ul>
                {getBooksByGenre().map((book) => (
                    <li key={book.id}>
                        {book.title} by {book.author} (Genre: {book.genre})
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BookList