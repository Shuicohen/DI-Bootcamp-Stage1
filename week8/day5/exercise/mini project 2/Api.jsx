export const fetchImages = async (query) => {
    const API_KEY = 'XlueuGUhUV4uJ9SHN8emwbwwLY6XspbhTUDsUzU7WvqDcNIi370ndVwT';
    const URL = `https://api.pexels.com/v1/search?query=${query}&per_page=24`;
  
    const response = await fetch(URL, {
      headers: { Authorization: API_KEY },
    });
  
    if (!response.ok) {
      throw new Error('Failed to fetch images');
    }
  
    const data = await response.json();
    return data.photos;
  };
  