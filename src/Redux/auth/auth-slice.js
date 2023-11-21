import { createSlice, current } from '@reduxjs/toolkit';
import { register, login, currentUser, logout } from './auth-operations';

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
      state.token = action.payload;
    });

    builder.addCase(login.rejected, (state, action) => {
      state.error = action.payload; //401
    });

    // current
    builder.addCase(currentUser.pending, (state, action) => {
      state.error = null;
      state.isRefresh = true;
    });

    builder.addCase(currentUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefresh = false;
    });

    builder.addCase(currentUser.rejected, (state, action) => {
      state.error = action.payload; //401
      state.isRefresh = false;
    });

    //logout
    builder.addCase(logout.pending, (state, action) => {
      state.error = null;
      state.isRefresh = true;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      // state = { ...initialState };
      state.user = null;
      state.error = null;
      state.token = null;
      state.isLoggedIn = false;
      state.isRefresh = false;
    });
    builder.addCase(logout.rejected, (state, action) => {
      state = { ...initialState };
    });
  },
});
