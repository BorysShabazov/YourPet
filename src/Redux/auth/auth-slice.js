import { createSlice } from '@reduxjs/toolkit';
import { register } from './auth-operations';

const initialState = {};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state, action) => {
      // action is inferred correctly here if using TS
    });
  },
});
