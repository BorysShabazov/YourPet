export const getIsLoggedIn = (state) => state.auth.isLoggedIn;

export const getAuthError = (state) => state.auth.error;

export const selectAuth = (state) => state.auth;

export const getRefresh = (state) => state.auth.isRefresh;
