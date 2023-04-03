import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchGameAchievements,
  fetchGameDetails,
  fetchGameScreenshots,
} from 'service/rawgAPI';

export const getGameDetails = createAsyncThunk(
  'games/getGameDetails',
  async (id, { rejectWithValue }) => {
    try {
      const game = await fetchGameDetails(id);
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
      return screen;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getAchievements = createAsyncThunk(
  'games/getAchievements',
  async (id, { rejectWithValue }) => {
    try {
      const achievements = await fetchGameAchievements(id);
      return achievements;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
