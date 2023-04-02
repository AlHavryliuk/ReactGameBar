import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

const initealState = { gameList: [], page: 1, per_page: 6 };

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
    incrementLocalPage(state) {
      ++state.page;
    },
    decrementLocalPage(state) {
      --state.page;
    },
    setFirstLocalPage(state) {
      state.page = 1;
    },
  },
});

export const {
  addFavoriteGame,
  removeFavoriteGame,
  incrementLocalPage,
  decrementLocalPage,
  setFirstLocalPage,
} = favoriteGamesSlice.actions;

const persistedConfig = {
  key: `favoriteGames`,
  storage,
  blacklist: ['page'],
};

export const persistedFavoriteGamesReducer = persistReducer(
  persistedConfig,
  favoriteGamesSlice.reducer
);
