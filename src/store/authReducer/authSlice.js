import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import swal from 'sweetalert';
import getErrorMessage from 'utils/helpers/httpError';
import {
  getCurrentUser,
  getUsersThunk,
  googleLoginUser,
  loginUser,
  logoutUser,
  patchCurrentUserThunk,
  patchUserAvatarThunk,
  registerUser,
} from './authOperations';

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  extraReducers: builder =>
    builder
      .addCase(registerUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
        const swalMessage = getErrorMessage(payload.status);
        swal('Error', swalMessage, 'error');
      })

      .addCase(loginUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })

      .addCase(googleLoginUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(googleLoginUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
      })
      .addCase(googleLoginUser.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })

      .addCase(logoutUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = null;
      })
      .addCase(logoutUser.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })

      .addCase(getCurrentUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCurrentUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(getCurrentUser.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
        state.user = null;
      })

      .addCase(patchCurrentUserThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(patchCurrentUserThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = { ...state.user, nickname: payload.nickname };
      })
      .addCase(patchCurrentUserThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })

      .addCase(patchUserAvatarThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(patchUserAvatarThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = { ...state.user, avatarURL: payload.avatarURL };
      })
      .addCase(patchUserAvatarThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })

      .addCase(getUsersThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getUsersThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = { ...state.user, userList: payload.userList };
      })
      .addCase(getUsersThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      }),
});

const persistedConfig = {
  key: `auth`,
  storage,
  whitelist: ['user'],
};

export const persistedAuthReducer = persistReducer(
  persistedConfig,
  authSlice.reducer
);
