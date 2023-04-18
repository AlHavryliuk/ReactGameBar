import { createSlice } from '@reduxjs/toolkit';
import {
  getGamesList,
  loadMoreGames,
  searchGames,
  searchGamesByGenre,
} from './gamesOperation';

const initialState = { gamesArray: null, isLoading: false, error: null };

export const gamesSlice = createSlice({
  name: 'games',
  initialState: initialState,
  extraReducers: builder =>
    builder
      .addCase(getGamesList.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getGamesList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.gamesArray = action.payload.results;
      })
      .addCase(getGamesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(searchGames.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(searchGames.fulfilled, (state, action) => {
        state.isLoading = false;
        state.gamesArray = action.payload.results;
        
      })
      .addCase(searchGames.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(loadMoreGames.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loadMoreGames.fulfilled, (state, action) => {
        state.isLoading = false;
        state.gamesArray = action.payload.results;
      })
      .addCase(loadMoreGames.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(searchGamesByGenre.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(searchGamesByGenre.fulfilled, (state, action) => {
        state.isLoading = false;
        state.gamesArray = action.payload.results;
      })
      .addCase(searchGamesByGenre.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

const gamesReducer = gamesSlice.reducer;
export default gamesReducer;
