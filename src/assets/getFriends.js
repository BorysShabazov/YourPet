import { instance } from '../Redux/auth/auth-operations';

export const getFriends = async () => {
  const resp = await instance.get('/api/friends/');
  return resp.data;
};
