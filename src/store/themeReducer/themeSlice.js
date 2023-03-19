import { createSlice } from '@reduxjs/toolkit';

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

const themeReducer = themeSlice.reducer;
export const { toggleDarkMode } = themeSlice.actions;
export default themeReducer;
