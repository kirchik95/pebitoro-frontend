import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '@core/api';

import { CategoryEntity } from '@entities/Category';

export const getCategories = createAsyncThunk('categories/getCategories', async (_, thunkApi) => {
  try {
    const response = await api.categories.getCategories();

    return { items: response };
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

export const createCategory = createAsyncThunk(
  'categories/createCategory',
  async (data: { name: string } & Partial<CategoryEntity>, thunkApi) => {
    try {
      return await api.categories.createCategory(data);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);

export const updateCategory = createAsyncThunk(
  'categories/updateCategory',
  async (data: Partial<CategoryEntity>, thunkApi) => {
    try {
      const response = await api.categories.updateCategory(data);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);

export const deleteCategory = createAsyncThunk(
  'categories/deleteCategory',
  async (id: number, thunkApi) => {
    try {
      await api.categories.deleteCategory(id);
      return id;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);
