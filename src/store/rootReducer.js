import { combineReducers } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import gamesReducer from './gamesReducer/gamesSlice';
import genresReducer from './genresReducer/genresSlice';
import mobileNavReducer from './mobileNav/mobileNavSlice';
import requestReducer from './requestReducer/requestSlice';
import selectGameReducer from './selectGameReducer/selectGameSlice';
import themeReducer from './themeReducer/themeSlice';

const persistedConfig = {
  key: `lightMode`,
  storage,
};

export const persistedthemeReducer = persistReducer(
  persistedConfig,
  themeReducer
);

export const rootReducer = combineReducers({
  theme: persistedthemeReducer,
  games: gamesReducer,
  request: requestReducer,
  selectGame: selectGameReducer,
  genres: genresReducer,
  mobileNavigation: mobileNavReducer,
});
