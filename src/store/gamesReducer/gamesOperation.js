import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchGameList } from 'service/rawgAPI';

export const getGamesList = createAsyncThunk(
  'games/getGamesList',
  async (_, { rejectWithValue }) => {
    try {
      const gamesList = await fetchGameList();
      return gamesList;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loadMoreGames = createAsyncThunk(
  'games/loadMoreGames',
  async (data, { rejectWithValue }) => {
    try {
      const gamesList = await fetchGameList(data);
      return gamesList;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
