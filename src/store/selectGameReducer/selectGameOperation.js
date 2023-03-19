import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchGameDetails, fetchGameScreenshots } from 'service/rawgAPI';

export const getGameDetails = createAsyncThunk(
  'games/getGameDetails',
  async (id, { rejectWithValue }) => {
    try {
      const game = await fetchGameDetails(id);
      console.log(game);
      return game;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getScreenshots = createAsyncThunk(
  'games/getScreenshots',
  async (game_pk, { rejectWithValue }) => {
    try {
      const screen = await fetchGameScreenshots(game_pk);
      console.log(screen);
      return screen;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
