import axios from 'axios';

export const getNews = async () => {
  const resp = await axios('/api/news/');
  return resp.data;
};
