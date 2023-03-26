import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchGameList, fetchGameListByGenre } from 'service/rawgAPI';

export const getGamesList = createAsyncThunk(
  'games/getGamesList',
  async (page, { rejectWithValue }) => {
    try {
      const gamesList = await fetchGameList(page);
      return gamesList;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const searchGames = createAsyncThunk(
  'games/searchGames',
  async ({ page, searchQuery }, { rejectWithValue }) => {
    try {
      const gamesList = await fetchGameList(page, searchQuery);
      return gamesList;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const searchGamesByGenre = createAsyncThunk(
  'games/searchGamesByGenre',
  async ({ page, genre }, { rejectWithValue }) => {
    try {
      const gamesList = await fetchGameListByGenre(page, genre);
      return gamesList;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loadMoreGames = createAsyncThunk(
  'games/loadMoreGames',
  async ({ page, searchQuery, searchGenres }, { rejectWithValue }) => {
    try {
      if (searchGenres) {
        const gamesList = await fetchGameListByGenre(page, searchGenres);
        return gamesList;
      }
      const gamesList = await fetchGameList(page, searchQuery, searchGenres);
      return gamesList;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
