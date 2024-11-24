import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { signIn } from './actions';
import { InitialState } from './types';

const initialState: InitialState = {
  status: 'idle',
  isAuthenticated: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signIn.fulfilled, (state) => {
        state.status = 'success';
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(signIn.rejected, (state, action: PayloadAction<string>) => {
        state.status = 'error';
        state.error = action.payload;
      });
  },
});

export const { actions: authAuthActions, reducer: authReducer } = authSlice;
