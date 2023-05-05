import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchGameList, fetchGameListByGenre } from 'service/rawgAPI';
import { setLastPage } from 'store/requestReducer/requestSlice';

export const getGamesList = createAsyncThunk(
  'games/getGamesList',
  async (page, { rejectWithValue, dispatch }) => {
    try {
      const gamesList = await fetchGameList(page);
      dispatch(setLastPage(gamesList.count));
      return gamesList;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const searchGames = createAsyncThunk(
  'games/searchGames',
  async ({ page, searchQuery }, { rejectWithValue, dispatch }) => {
    if (searchQuery == null) return { results: [] };
    try {
      const data = await fetchGameList(page, searchQuery);

      dispatch(setLastPage(data.count));
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const searchGamesByGenre = createAsyncThunk(
  'games/searchGamesByGenre',
  async ({ page, genre }, { rejectWithValue, dispatch }) => {
    try {
      const gamesList = await fetchGameListByGenre(page, genre);
      dispatch(setLastPage(gamesList.count));
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
