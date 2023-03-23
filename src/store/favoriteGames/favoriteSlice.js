import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

const initealState = { gameList: [] };

export const favoriteGamesSlice = createSlice({
  name: 'favoriteGames',
  initialState: initealState,
  reducers: {
    addFavoriteGame(state, { payload }) {
      state.gameList = [...state.gameList, payload];
    },
    removeFavoriteGame(state, { payload }) {
      state.gameList = state.gameList.filter(({ id }) => id !== payload);
    },
  },
});

export const { addFavoriteGame, removeFavoriteGame } =
  favoriteGamesSlice.actions;

const persistedConfig = {
  key: `favoriteGames`,
  storage,
};

export const persistedFavoriteGamesReducer = persistReducer(
  persistedConfig,
  favoriteGamesSlice.reducer
);
