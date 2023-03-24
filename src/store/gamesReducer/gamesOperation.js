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

export const searchGames = createAsyncThunk(
  'games/searchGames',
  async (query, { rejectWithValue }) => {
    try {
      const gamesList = await fetchGameList(1, query);
      console.log(gamesList);
      return gamesList;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loadMoreGames = createAsyncThunk(
  'games/loadMoreGames',
  async ({ page, searchQuery }, { rejectWithValue }) => {
    try {
      const gamesList = await fetchGameList(page, searchQuery);
      return gamesList;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
