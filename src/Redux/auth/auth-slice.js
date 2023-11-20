import { createSlice } from '@reduxjs/toolkit';
import { register, login } from './auth-operations';

const initialState = {
  user: null,
  error: null,
  token: null,
  isLoggedIn: false,
  isRefresh: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    // register
    builder.addCase(register.pending, (state, action) => {
      state.error = null;
    });

    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload.data.user;
      state.isLoggedIn = true;
      state.error = null;
      state.token = action.payload.data.token;
    });

    builder.addCase(register.rejected, (state, action) => {
      state.error = action.payload; //409
    });

    // login
    builder.addCase(login.pending, (state, action) => {
      state.error = null;
    });

    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.token = action.payload.token;
    });

    builder.addCase(login.rejected, (state, action) => {
      state.error = action.payload; //401
    });
  },
});
