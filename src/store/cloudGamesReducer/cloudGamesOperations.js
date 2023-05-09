import { createAsyncThunk } from '@reduxjs/toolkit';
import { successToast } from 'components/Custom/Toaster/toasts';
import { deleteGame, getAll, getGameById, postGame } from 'service/vortexGame';

export const addGame = createAsyncThunk(
  'cloud/postGame',
  async (game, { rejectWithValue }) => {
    try {
      const result = await postGame(game);
      successToast(
        `The game "${game.name}" has been successfully added to your cloud`
      );
      return result;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.message);
    }
  }
);

export const getCloudGames = createAsyncThunk(
  'cloud/getCloudGames',
  async (page, { rejectWithValue }) => {
    try {
      const result = await getAll(page);
      return result;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.message);
    }
  }
);

export const removeGame = createAsyncThunk(
  'cloud/removeGames',
  async (gameID, { rejectWithValue }) => {
    try {
      const result = await deleteGame(gameID);
      successToast(`The game has been successfully removed from your cloud`);
      return result;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.message);
    }
  }
);

export const checkByID = createAsyncThunk(
  'cloud/getByID',
  async (gameID, { rejectWithValue }) => {
    try {
      const result = await getGameById(gameID);
      return result;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.message);
    }
  }
);
