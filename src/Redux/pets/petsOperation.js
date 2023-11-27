import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPets = createAsyncThunk(
  'pets/fetchPets',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/api/pets/own`);
      return response.data;
    } catch (evt) {
      return thunkAPI.rejectWithValue(evt.message);
    }
  },
);

export const createPet = createAsyncThunk(
  'pets/postPet',
  async (arg, thunkAPI) => {
    try {
      const { data } = await axios.post('/api/pets', arg);
      return data;
    } catch (evt) {
      return thunkAPI.rejectWithValue(evt.message);
    }
  },
);

export const deletePet = createAsyncThunk(
  'pets/deletePet',
  async (arg, thunkAPI) => {
    try {
      axios.delete(`/api/pets/${arg}`);
      return arg;
    } catch (evt) {
      return thunkAPI.rejectWithValue(evt.message);
    }
  },
);
