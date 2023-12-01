import { instance } from '../Redux/auth/auth-operations';

export const getNews = async () => {
  const resp = await instance.get('/api/news/');
  return resp.data;
};

export const getNewsByQuery = async (q, page = 1) => {
  const resp = await instance.get(`/api/news/?q=${q}&page=${page}`);
  return resp.data;
};
