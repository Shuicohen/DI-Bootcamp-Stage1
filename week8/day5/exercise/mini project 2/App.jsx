import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import { fetchImages } from './Api';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CategoryButtons from './components/CategoryButtons';
import ImageGrid from './components/ImageGrid';
import './App.css';

const SearchPage = () => {
  const { query } = useParams();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await fetchImages(query);
        setImages(result);
      } catch (error) {
        setError('Could not fetch images');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [query]);

  return (
    <div>
      <SearchBar />
      <CategoryButtons />
      <h2>{query} Pictures</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && <ImageGrid images={images} />}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/search/:query" element={<SearchPage />} />
      </Routes>
    </Router>
  );
};

export default App;
