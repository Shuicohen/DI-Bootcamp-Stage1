import { useSelector } from 'react-redux';

const CategorySelector = ({ onCategorySelect }) => {
  const categories = useSelector(state => state.categoryReducer.categories);

  if (!categories || categories.length === 0) {
    return <p>No categories available</p>;
  }

  return (
    <select onChange={(e) => onCategorySelect(e.target.value)}>
      {categories.map(category => (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      ))}
    </select>
  );
};

export default CategorySelector;