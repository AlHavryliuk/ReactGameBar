import { combineReducers } from '@reduxjs/toolkit';
import { persistedFavoriteGamesReducer } from './favoriteGames/favoriteSlice';
import gamesReducer from './gamesReducer/gamesSlice';
import genresReducer from './genresReducer/genresSlice';
import mobileNavReducer from './mobileNav/mobileNavSlice';
import requestReducer from './requestReducer/requestSlice';
import selectGameReducer from './selectGameReducer/selectGameSlice';
import { persistedThemeReducer } from './themeReducer/themeSlice';

export const rootReducer = combineReducers({
  theme: persistedThemeReducer,
  games: gamesReducer,
  request: requestReducer,
  selectGame: selectGameReducer,
  genres: genresReducer,
  mobileNavigation: mobileNavReducer,
  favoriteGames: persistedFavoriteGamesReducer,
});
