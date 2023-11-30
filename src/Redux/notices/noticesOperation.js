import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../auth/auth-operations';

export const fetchNotices = createAsyncThunk(
  'notices/fetchNotices',
  async ({ category, query = '', page, limit }, thunkAPI) => {
    try {
      const response = await instance.get(
        `/api/notices/${category}?${
          query ? `q=${query}` : ''
        }&page=${page}&limit=${limit}`,
      );
      return response.data.data;
    } catch (evt) {
      return thunkAPI.rejectWithValue(evt.message);
    }
  },
);

export const getNoticeById = createAsyncThunk(
  'notices/getNoticeById',
  async (id, thunkAPI) => {
    try {
      const response = await instance.get(`/api/notices/id/${id}`);
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
      const { data } = await instance.post('/api/notices', arg);
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
      instance.delete(`/api/notices/${arg}`);
      return arg;
    } catch (evt) {
      return thunkAPI.rejectWithValue(evt.message);
    }
  },
);
