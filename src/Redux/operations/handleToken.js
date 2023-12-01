import { instance } from '../auth/auth-operations';

export const setToken = (token) => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const delToken = () => {
  instance.defaults.headers.common['Authorization'] = '';
};
