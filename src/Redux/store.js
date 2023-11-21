import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { authSlice } from './auth/auth-slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { noticesStateReducer } from './notices/noticesSlise';
import { petsStateReducer } from './pets/petsSlice';

// auth persist config
const authPersistConfig = {
  key: 'auth',
  storage: storage,
  whitelist: ['token'],
};

const rootReduser = combineReducers({
  // redusers
  auth: persistReducer(authPersistConfig, authSlice.reducer),
  notices: noticesStateReducer,
  pets: petsStateReducer,
});

export const store = configureStore({
  reducer: rootReduser,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
