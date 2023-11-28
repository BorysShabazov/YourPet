import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchNotices = createAsyncThunk(
  'notices/fetchNotices',
  async ({category, query}, thunkAPI) => {
    try {

      const response = await axios.get(`/api/notices/${category}?q=${query}`);

      return response.data.data.notices;
    } catch (evt) {
      return thunkAPI.rejectWithValue(evt.message);
    }
  },
);

export const getNoticeById = createAsyncThunk(
  'notices/getNoticeById',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/api/notices/id/${id}`);
      return response.data.data.notice;
    } catch (evt) {
      return thunkAPI.rejectWithValue(evt.message);
    }
  },
);

export const createNotice = createAsyncThunk(
  'notices/postNotice',
  async (arg, thunkAPI) => {
    try {
      const { data } = await axios.post('/api/notices', arg);
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
      axios.delete(`/api/notices/${arg}`);
      return arg;
    } catch (evt) {
      return thunkAPI.rejectWithValue(evt.message);
    }
  },
);
