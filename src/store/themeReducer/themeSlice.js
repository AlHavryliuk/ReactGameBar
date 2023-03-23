import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

const initialState = { darkMode: false };

export const themeSlice = createSlice({
  name: 'theme',
  initialState: initialState,
  reducers: {
    toggleDarkMode: state => {
      state.darkMode = !state.darkMode;
    },
    darkModeOn: state => state.darkMode,
    darkModeOff: state => state.darkMode,
  },
});

export const { toggleDarkMode } = themeSlice.actions;

const persistedConfig = {
  key: `lightMode`,
  storage,
};

export const persistedThemeReducer = persistReducer(
  persistedConfig,
  themeSlice.reducer
);
