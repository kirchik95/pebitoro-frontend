import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserEntity } from '@entities/User';

import { signIn } from './actions';
import { InitialState } from './types';

const initialState: InitialState = {
  status: 'idle',
  isAuthenticated: false,
  user: null,
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
      .addCase(signIn.fulfilled, (state, action: PayloadAction<{ user: UserEntity }>) => {
        state.status = 'success';
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(signIn.rejected, (state) => {
        state.status = 'error';
      });
  },
});

export const { actions: authAuthActions, reducer: authReducer } = authSlice;
