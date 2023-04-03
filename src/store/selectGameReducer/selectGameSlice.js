import { createSlice } from '@reduxjs/toolkit';
import {
  getGameDetails,
  getScreenshots,
  getAchievements,
} from './selectGameOperation';

const initialState = {
  game: null,
  screenshots: null,
  achievements: null,
  isLoading: false,
  error: null,
};

export const selectGameSlice = createSlice({
  name: 'selectGame',
  initialState: initialState,
  reducers: {
    clearAchievements(state) {
      state.achievements = null;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(getGameDetails.pending, state => {
        state.isLoading = true;
      })
      .addCase(getGameDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.game = action.payload;
      })
      .addCase(getGameDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(getScreenshots.pending, state => {
        state.isLoading = true;
      })
      .addCase(getScreenshots.fulfilled, (state, action) => {
        state.isLoading = false;
        state.screenshots = action.payload.map(({ image }) => image);
      })
      .addCase(getScreenshots.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(getAchievements.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAchievements.fulfilled, (state, action) => {
        state.isLoading = false;
        state.achievements = action.payload;
      })
      .addCase(getAchievements.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

const selectGameReducer = selectGameSlice.reducer;
export const { clearAchievements } = selectGameSlice.actions;
export default selectGameReducer;
