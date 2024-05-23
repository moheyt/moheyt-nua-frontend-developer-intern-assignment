import axios from 'axios';

const API_URL = 'https://openlibrary.org/search.json?title=';

export const fetchBooks = async (page, limit) => {
  try {
    const offset = (page - 1) * limit; // Calculate the offset
    const response = await axios.get(`${API_URL}/search.json`, {
      params: {
        title: 'books',
        offset,
        limit
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data from API:", error);
    throw error;
  }
};
