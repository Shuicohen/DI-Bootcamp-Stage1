import axios from 'axios';

// Generic function to fetch data
export const fetchRecipeData = async () => {
  const options = {
    method: 'GET',
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random',
    params: { tags: 'vegetarian,dessert', number: '10' },
    headers: {
      'x-rapidapi-key': '267f4397bcmsh42558b3e0e79ebdp1ae53ejsn99f6bf738b8e', 
    }
  };

  try {
    const response = await axios.request(options);
    return response.data.recipes[0];
  } catch (error) {
    throw new Error('Failed to fetch recipe data');
  }
};
