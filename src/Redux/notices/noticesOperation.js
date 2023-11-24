import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = '';

export const fetchNotices = createAsyncThunk(
  'notices/fetchNotices',
  async (category, thunkAPI) => {
    try {
      const response = await axios.get(`/notices/${category}`);
      return response.data;
    } catch (evt) {
      return thunkAPI.rejectWithValue(evt.message);
    }
  },
);

export const getNoticeById = createAsyncThunk(
  'notices/getNoticeById',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/notices/${id}`);
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
      const { data } = await axios.post('/notices', arg);
      return data;
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
