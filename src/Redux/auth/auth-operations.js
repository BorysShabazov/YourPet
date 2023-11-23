import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setToken, delToken } from '../operations/handleToken';

const BASE_URL = 'https://your-pet-server.onrender.com/api/users';

// register
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/register`, credentials);
      const { data: dataResponse } = data;

      setToken(dataResponse.token);
      return { token: dataResponse.token, user: dataResponse.user };
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
      const { data: dataResponse } = data;

      setToken(dataResponse.token);
      return { token: dataResponse.token, user: dataResponse.user };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  },
);

// current
export const currentUser = createAsyncThunk(
  'auth/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.token;

    if (persistToken === null) {
      thunkAPI.rejectValue();
    }

    setToken(persistToken);

    try {
      const { data } = await axios.get(`${BASE_URL}/current`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  },
);

// logout
export const logout = createAsyncThunk('auth/logout', async (thunkAPI) => {
  try {
    const result = await axios.post(`${BASE_URL}/logout`);
    delToken();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.status);
  }
});


// update
export const update = createAsyncThunk(
  'auth/update',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.patch(`${BASE_URL}`, credentials, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });      
      const { data: dataResponse } = data;

      return { token: dataResponse.token, user: dataResponse.user };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  },
);