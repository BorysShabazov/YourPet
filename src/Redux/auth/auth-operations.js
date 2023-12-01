import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setToken, delToken } from '../operations/handleToken';

export const instance = axios.create({
  baseURL: 'https://your-pet-backend-test.onrender.com',
});

// register
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await instance.post(`/api/users/register`, credentials);
      const { data: dataResponse } = data;

      setToken(dataResponse.accessToken);
      localStorage.setItem('refresh', dataResponse.refreshToken);

      return {
        token: dataResponse.accessToken,
        refreshToken: dataResponse.refreshToken,
        user: dataResponse.user,
      };
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
      const { data } = await instance.post(`/api/users/login`, credentials);
      const { data: dataResponse } = data;

      setToken(dataResponse.accessToken);
      localStorage.setItem('refresh', dataResponse.refreshToken);

      return {
        token: dataResponse.accessToken,
        refreshToken: dataResponse.refreshToken,
        user: dataResponse.user,
      };
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
    const token = state.auth.token;

    if (token === null) {
      thunkAPI.rejectValue();
    }

    setToken(token);

    try {
      const { data } = await instance.get(`/api/users/current`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  },
);

// logout
export const logout = createAsyncThunk('/api/auth/logout', async (thunkAPI) => {
  try {
    const result = await instance.post(`/api/users/logout`);
    localStorage.setItem('refresh', null);
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
      const { data } = await instance.patch(`/api/users`, credentials, {
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
