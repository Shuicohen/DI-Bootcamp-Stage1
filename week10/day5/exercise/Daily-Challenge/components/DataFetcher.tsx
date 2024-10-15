import React, { useEffect, useState } from 'react';
import { fetchRecipeData } from '../api/api';

const DataFetcher: React.FC = () => {
  const [recipe, setRecipe] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchRecipeData();
        setRecipe(data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching recipe data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {recipe ? (
        <div>
          <h2>{recipe.title}</h2>
          <img src={recipe.image} alt={recipe.title} />
          <div dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
        </div>
      ) : (
        <div>No recipe found</div>
      )}
    </div>
  );
};

export default DataFetcher;
