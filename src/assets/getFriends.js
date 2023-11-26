import axios from 'axios';

export const getFriends = async () => {
  const resp = await axios('/api/friends/');
  return resp.data;
};


