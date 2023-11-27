import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  login,
  currentUser,
  logout,
  update,
} from './auth-operations';

const initialState = {
  user: null,
  error: null,
  token: null,
  refreshToken: null,
  isLoggedIn: false,
  isRefresh: false,
  isRequestActive: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetHttpError: (state) => {
      state.error = null;
    },

    setAccessToken: (state, action) => {
      state.token = action.payload;
    },

    setRefreshToken: (state, action) => {
      state.refreshToken = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(register.pending, (state) => {
      state.error = null;
      state.isRequestActive = true;
    });

    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      if (!action.payload.user.birthday) {
        state.user.birthday = '00.00.0000';
      }
      state.isLoggedIn = true;
      state.error = null;
      state.isRequestActive = false;
    });

    builder.addCase(register.rejected, (state, action) => {
      state.error = action.payload; //409
      state.isRequestActive = false;
    });

    // login
    builder.addCase(login.pending, (state) => {
      state.error = null;
      state.isRequestActive = true;
    });

    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.isLoggedIn = true;
      state.isRequestActive = false;
    });

    builder.addCase(login.rejected, (state, action) => {
      state.error = action.payload; //401
      state.isRequestActive = false;
    });

    // current
    builder.addCase(currentUser.pending, (state) => {
      state.error = null;
      state.isRefresh = true;
    });

    builder.addCase(currentUser.fulfilled, (state, action) => {
      state.user = action.payload.data.user;
      // if (!action.payload.user?.birthday) {
      //   state.user.birthday = '04.06.2000';
      // }
      state.isLoggedIn = true;
      state.isRefresh = false;
    });

    builder.addCase(currentUser.rejected, (state, action) => {
      state.error = action.payload; //401
      state.isRefresh = false;
    });

    //logout
    builder.addCase(logout.pending, (state) => {
      state.error = null;
      state.isRefresh = true;
    });
    builder.addCase(logout.fulfilled, (state) => {
      // state = { ...initialState };
      state.user = null;
      state.error = null;
      state.token = null;
      state.isLoggedIn = false;
      state.isRefresh = false;
    });
    builder.addCase(logout.rejected, (state) => {
      state.user = null;
      state.error = null;
      state.token = null;
      state.isLoggedIn = false;
      state.isRefresh = false;
    });

    // update
    builder.addCase(update.pending, (state) => {
      state.error = null;
      state.isRequestActive = true;
    });

    builder.addCase(update.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.isLoggedIn = true;
      state.error = null;
      state.isRequestActive = false;
    });

    builder.addCase(update.rejected, (state, action) => {
      state.error = action.payload; //409
      state.isRequestActive = false;
    });
  },
});
