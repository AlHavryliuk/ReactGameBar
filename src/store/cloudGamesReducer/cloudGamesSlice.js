import { createSlice } from '@reduxjs/toolkit';
import {
  addGame,
  checkByID,
  getCloudGames,
  removeGame,
} from './cloudGamesOperations';

const initealState = {
  cloudGames: [],
  isLoading: false,
  error: null,
  tempGame: false,
  totalPages: 0,
};

export const cloudGamesSlice = createSlice({
  name: 'cloudGames',
  initialState: initealState,
  extraReducers: builder =>
    builder
      .addCase(addGame.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addGame.fulfilled, (state) => {
        state.isLoading = false;
        state.tempGame = true;
      })
      .addCase(addGame.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })

      .addCase(getCloudGames.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCloudGames.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.cloudGames = payload.games;
        state.totalPages = payload.totalPages;
      })
      .addCase(getCloudGames.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })

      .addCase(removeGame.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(removeGame.fulfilled, (state) => {
        state.isLoading = false;
        state.tempGame = false;
      })
      .addCase(removeGame.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })

      .addCase(checkByID.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(checkByID.fulfilled, (state) => {
        state.isLoading = false;
        state.tempGame = true;
      })
      .addCase(checkByID.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
        state.tempGame = false;
      }),
});


const cloudGamesReducer = cloudGamesSlice.reducer;
export default cloudGamesReducer;