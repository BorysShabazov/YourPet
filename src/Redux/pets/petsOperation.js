import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://your-pet-server.onrender.com/api';

export const fetchPets = createAsyncThunk(
  'pets/fetchPets',
  async (arg, thunkAPI) => {
    try {
      const response = await axios.get(`/pets/${arg}`);
      return response.data;
    } catch (evt) {
      return thunkAPI.rejectWithValue(evt.message);
    }
  },
);

export const createPets = createAsyncThunk(
  'pets/postPets',
  async (arg, thunkAPI) => {
    try {
      const { data } = await axios.post('/pets', arg);
      return data;
    } catch (evt) {
      return thunkAPI.rejectWithValue(evt.message);
    }
  },
);

export const deletePets = createAsyncThunk(
  'pets/deletePets',
  async (arg, thunkAPI) => {
    try {
      axios.delete(`/pets/${arg}`);
      return arg;
    } catch (evt) {
      return thunkAPI.rejectWithValue(evt.message);
    }
  },
);
