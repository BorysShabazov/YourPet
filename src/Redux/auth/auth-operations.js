import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setToken } from '../operations/handleToken';

const BASE_URL = 'https://your-pet-server.onrender.com/api/users';

// register
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/register`, credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  },
);

// login
export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/login`, credentials);
      setToken(data.token);
      return data.token;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  },
);
