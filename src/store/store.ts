import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer,persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Use localStorage as the default storage

import leaderboardReducer from './features/leaderboard/leaderboard.slice';

const rootReducer = combineReducers({
  leaderboard: leaderboardReducer,
});

const persistConfig = {
  key: 'root',
  storage: storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export const persistor = persistStore(store); //added newly

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;