import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './authSlice';
import progressReducer from './progressSlice';

// Configuración de persistencia para auth
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['user', 'isAuthenticated', 'token']
};

// Configuración de persistencia para progress
const progressPersistConfig = {
  key: 'progress',
  storage,
  whitelist: ['videoProgress', 'examResults', 'userStats', 'badges', 'achievements']
};

// Store principal
export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    progress: persistReducer(progressPersistConfig, progressReducer)
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE']
      }
    })
});

// Persistor
export const persistor = persistStore(store);

// Tipos
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
