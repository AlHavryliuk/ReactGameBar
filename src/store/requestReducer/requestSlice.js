import { createSlice } from '@reduxjs/toolkit';
import { apiData } from 'configuration/config';

const initialState = { page: 1, lastPage: null };

export const requestSlice = createSlice({
  name: 'request',
  initialState: initialState,
  reducers: {
    incrementPage(state) {
      state.page = state.page + 1;
    },
    decrementPage(state) {
      state.page = state.page - 1;
    },
    setLastPage(state, action) {
      state.lastPage = action.payload / apiData.per_page;
    },
    setFirstPage(state, action) {
      state.page = 1;
    },
  },
});

export const { incrementPage, decrementPage, setFirstPage } =
  requestSlice.actions;
const requestReducer = requestSlice.reducer;
export default requestReducer;
