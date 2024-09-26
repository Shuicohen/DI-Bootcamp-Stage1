import React from 'react';
import { useNavigate } from 'react-router-dom';

const categories = ['Mountains', 'Beaches', 'Birds', 'Food'];

const CategoryButtons = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/search/${category}`);
  };

  return (
    <div className="category-buttons">
      {categories.map((category) => (
        <button key={category} onClick={() => handleCategoryClick(category)}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryButtons;
