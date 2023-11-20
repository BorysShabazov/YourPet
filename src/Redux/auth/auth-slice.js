import { createSlice } from '@reduxjs/toolkit';
import { register } from './auth-operations';

const initialState = {
  user: { email: null, name: null, avatar: null },
  error: null,
  token: null,
  isLoggedIn: false,
  isRefresh: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state, action) => {
      state.error = null;
    });

    builder.addCase(register.fulfilled, (state, action) => {
      // need set token
      state.user = action.payload.data;
      state.isLoggedIn = true;
      state.error = null;
    });

    builder.addCase(register.rejected, (state, action) => {
      state.error = action.payload; //409
    });
  },
});
