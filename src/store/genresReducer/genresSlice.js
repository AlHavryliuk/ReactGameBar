import { createSlice } from '@reduxjs/toolkit';
import { getGenresList } from './genresOperations';

const initialState = { genresArray: null, isLoading: false, error: null };

export const genresSlice = createSlice({
  name: 'genres',
  initialState: initialState,
  extraReducers: builder =>
    builder
      .addCase(getGenresList.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getGenresList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.genresArray = action.payload.results;
      })
      .addCase(getGenresList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

const genresReducer = genresSlice.reducer;
export default genresReducer;
