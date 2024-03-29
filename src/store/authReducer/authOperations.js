import { createAsyncThunk } from '@reduxjs/toolkit';
import { failureToast } from 'components/Custom/Toaster/toasts';
import {
  fetchTokenIsAvailable,
  googleLogin,
  login,
  logout,
  register,
} from 'service/auth';
import {
  getAllUsers,
  updateUserAvatar,
  updateUserNickname,
} from 'service/vortexUser';
import swal from 'sweetalert';

export const registerUser = createAsyncThunk(
  'auth/postRegisterUser',
  async (credential, { rejectWithValue }) => {
    try {
      const result = await register(credential);
      swal({
        icon: 'success',
        title: 'Registration completed successfully!',
        text: 'An email with a verification code has been sent to your email.',
      });
      return result;
    } catch (error) {
      const { status } = error.response;
      const { message } = error;
      return rejectWithValue({ message, status });
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/postLoginUser',
  async (credential, { rejectWithValue }) => {
    try {
      const userData = await login(credential);
      return userData;
    } catch (error) {
      failureToast('Incorrect email or password, please try again');
      return rejectWithValue(error.message);
    }
  }
);

export const googleLoginUser = createAsyncThunk(
  'auth/postGoogleLoginUser',
  async (credential, { rejectWithValue }) => {
    try {
      const userData = await googleLogin({ credential });
      return userData;
    } catch (error) {
      failureToast('Incorrect email or password, please try again');
      return rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/postLogoutUser',
  async (_, { rejectWithValue }) => {
    try {
      const result = await logout();
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (_, { rejectWithValue }) => {
    try {
      const result = await fetchTokenIsAvailable();
      return result;
    } catch (error) {
      swal({
        title: 'Token timed out or emeil is not verify',
      });
      return rejectWithValue(error.message);
    }
  }
);

export const patchCurrentUserThunk = createAsyncThunk(
  'auth/patchCurrentUser',
  async (nickname, { rejectWithValue }) => {
    try {
      const result = await updateUserNickname(nickname);
      return result;
    } catch (error) {
      const { message } = error.response.data;
      swal({
        title: 'Error',
        text: message,
      });
      return rejectWithValue(error.message);
    }
  }
);

export const patchUserAvatarThunk = createAsyncThunk(
  'auth/patchUserAvatar',
  async (image, { rejectWithValue }) => {
    try {
      const result = await updateUserAvatar(image);
      return result;
    } catch (error) {
      const { message } = error.response.data;
      swal({
        title: 'Error',
        text: message,
      });
      return rejectWithValue(error.message);
    }
  }
);

export const getUsersThunk = createAsyncThunk(
  'admin/getUsersThunk',
  async (page, { rejectWithValue }) => {
    try {
      const result = await getAllUsers(page);
      return result;
    } catch (error) {
      const { message } = error.response.data;
      swal({
        title: 'Error',
        text: message,
      });
      return rejectWithValue(error.message);
    }
  }
);
