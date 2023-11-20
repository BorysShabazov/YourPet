import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://your-pet-server.onrender.com/api/users';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/register`, credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  },
);
