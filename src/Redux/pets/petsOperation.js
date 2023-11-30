import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../auth/auth-operations';

export const fetchPets = createAsyncThunk(
  'pets/fetchPets',
  async (_, thunkAPI) => {
    try {
      const response = await instance.get(`/api/pets/own`);
      return response.data.data;
    } catch (evt) {
      return thunkAPI.rejectWithValue(evt.message);
    }
  },
);

export const createPet = createAsyncThunk(
  'pets/postPet',
  async (arg, thunkAPI) => {
    try {
      const { data } = await instance.post('/api/pets', arg);
      // fetchPets();
      return data.data;
    } catch (evt) {
      return thunkAPI.rejectWithValue(evt.message);
    }
  },
);

export const deletePet = createAsyncThunk(
  'pets/deletePet',
  async (arg, thunkAPI) => {
    try {
      instance.delete(`/api/pets/${arg}`);
      // fetchPets();
      return arg;
    } catch (evt) {
      return thunkAPI.rejectWithValue(evt.message);
    }
  },
);
