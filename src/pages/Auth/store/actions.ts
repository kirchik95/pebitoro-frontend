import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '@core/api';

export const signIn = createAsyncThunk(
  'auth/signIn',
  async (data: { email: string; password: string }, thunkApi) => {
    try {
      const response = await api.auth.signIn(data);

      return { user: response.user };
    } catch (error) {
      console.error(error);

      return thunkApi.rejectWithValue(error);
    }
  },
);
