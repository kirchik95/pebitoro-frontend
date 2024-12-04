import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CategoryEntity } from '@entities/Category';

import { getCategories } from './actions';
import type { InitialState } from './types';

const initialState: InitialState = {
  status: 'idle',
  items: [],
  error: null,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(
        getCategories.fulfilled,
        (state, action: PayloadAction<{ items: CategoryEntity[] }>) => {
          state.status = 'success';
          state.items = action.payload.items;
          state.error = null;
        },
      )
      .addCase(getCategories.rejected, (state) => {
        state.status = 'error';
      });
  },
});

export const { actions: categoriesActions, reducer: categoriesReducer } = categoriesSlice;
