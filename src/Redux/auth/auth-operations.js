import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'http://localhost:5000/api/users';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/register`, credentials);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  },
);
