import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = '';

export const fetchNotices = createAsyncThunk(
  'notices/fetchNotices',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/notices');
      return response.data;
    } catch (evt) {
      return thunkAPI.rejectWithValue(evt.message);
    }
  },
);

export const createNotice = createAsyncThunk(
  'notices/postNotice',
  async (arg, thunkAPI) => {
    try {
      await axios.post('/notices', arg);
    } catch (evt) {
      return thunkAPI.rejectWithValue(evt.message);
    }
  },
);

export const deleteNotice = createAsyncThunk(
  'notices/deleteNotice',
  async (arg, thunkAPI) => {
    try {
      axios.delete(`/notices/${arg}`);
      return arg;
    } catch (evt) {
      return thunkAPI.rejectWithValue(evt.message);
    }
  },
);
