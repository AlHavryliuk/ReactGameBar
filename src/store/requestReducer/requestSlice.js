import { createSlice } from '@reduxjs/toolkit';
import { apiData } from 'configuration/config';

const initialState = {
  page: 1,
  searchQuery: '',
  currentPage: null,
  lastPage: null,
};

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
      state.lastPage = Math.ceil(action.payload / apiData.per_page);
    },
    setSearchPage(state, action) {
      state.page = +action.payload;
    },
    setFirstPage(state, action) {
      state.page = 1;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
    clearSearchQuery(state) {
      state.searchQuery = '';
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setFullSearchParams(state, { payload }) {
      state.searchQuery = payload.query;
      state.page = +payload.page;
    },
  },
});

export const {
  incrementPage,
  decrementPage,
  setFirstPage,
  setSearchQuery,
  clearSearchQuery,
  setCurrentPage,
  setSearchPage,
  setFullSearchParams,
  setLastPage,
  setPage,
} = requestSlice.actions;
const requestReducer = requestSlice.reducer;
export default requestReducer;
