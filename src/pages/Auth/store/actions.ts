import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '@core/api';

export const signIn = createAsyncThunk(
  'auth/signIn',
  async (data: { email: string; password: string }, thunkApi) => {
    try {
      const response = await api.auth.signIn(data);

      return { user: response.user, token: response.token };
    } catch (error) {
      console.error(error);

      return thunkApi.rejectWithValue(error);
    }
  },
);

export const getProfile = createAsyncThunk('auth/getProfile', async (_, thunkApi) => {
  try {
    const response = await api.profile.me();

    return { user: response };
  } catch (error) {
    console.error(error);
    return thunkApi.rejectWithValue(error);
  }
});
