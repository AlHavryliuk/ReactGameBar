import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchGenreList } from 'service/rawgAPI';

export const getGenresList = createAsyncThunk(
  'genres/getGenresList',
  async (_, { rejectWithValue }) => {
    try {
      const genresList = await fetchGenreList();
      return genresList;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
