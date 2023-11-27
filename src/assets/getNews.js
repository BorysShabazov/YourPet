import axios from 'axios';

export const getNews = async () => {
  const resp = await axios('/api/news/');
  return resp.data;
};

export const getNewsByQuery = async(q, page=1) => {
  const resp = await axios(`/api/news/?q=${q}&page=${page}`);
  return resp.data
}
