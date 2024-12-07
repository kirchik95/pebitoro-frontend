import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '@core/api';
import { GetTasksParams } from '@core/api/tasks';

import { TaskEntity } from '@entities/Task';

export const getTasks = createAsyncThunk(
  'tasks/getTasks',
  async (params: GetTasksParams | undefined, thunkApi) => {
    try {
      console.log('params', params);
      return await api.tasks.getTasks(params);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);

export const createTask = createAsyncThunk(
  'tasks/createTask',
  async (data: { title: string; description?: string }, thunkApi) => {
    try {
      return await api.tasks.createTask(data);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);

export const updateTask = createAsyncThunk(
  'tasks/updateTask',
  async (data: Partial<TaskEntity>, thunkApi) => {
    try {
      const response = await api.tasks.updateTask(data);

      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);

export const deleteTask = createAsyncThunk('tasks/deleteTask', async (id: number, thunkApi) => {
  try {
    await api.tasks.deleteTask(id);

    return id;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});
