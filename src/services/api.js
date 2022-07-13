import axios from 'axios';

const MY_KEY = '25371989-2f16daf8090ee603b85b75fec';

export const imagesApi = async (query, page) => {
  const response = await axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${MY_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data;
};
