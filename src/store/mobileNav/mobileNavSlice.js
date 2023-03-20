import { createSlice } from '@reduxjs/toolkit';

const initialState = { navMenu: false };

export const mobileNavSlice = createSlice({
  name: 'mobileNav',
  initialState: initialState,
  reducers: {
    openMenu(state) {
      state.navMenu = true;
    },
    closeMenu(state) {
      state.navMenu = false;
    },
  },
});

const mobileNavReducer = mobileNavSlice.reducer;
export const { openMenu, closeMenu } = mobileNavSlice.actions;
export default mobileNavReducer;
