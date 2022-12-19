import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = 'key=30588481-828dd19e4086d4e0d5bf36dc4';

const params = {
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 12,
};

export async function getPhoto(query, page) {
  try {
    const urlSearh = `?${API_KEY}&q=${query}&page=${page}`;
    const { data } = await axios.get(urlSearh, { params });
    // Loading.standard('Loading...',
    console.log('data: ', data);
    return data;
  } catch (error) {
    console.error(error);
  } finally {
    // Loading.remove(500);
  }
}

getPhoto('query', 1);
