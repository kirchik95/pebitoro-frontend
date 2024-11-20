import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TaskEntity } from '@entities/Task';

import { createTask, deleteTask, getTasks, updateTask } from './actions';

const initialState = {
  status: 'idle' as 'idle' | 'loading' | 'succeeded' | 'failed',
  tasks: [] as TaskEntity[],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTasks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getTasks.fulfilled, (state, action: PayloadAction<TaskEntity[]>) => {
        state.status = 'idle';
        state.tasks = action.payload;
      })
      .addCase(getTasks.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(createTask.fulfilled, (state, action: PayloadAction<TaskEntity>) => {
        state.tasks.push(action.payload);
      })
      .addCase(deleteTask.fulfilled, (state, action: PayloadAction<number>) => {
        state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      })
      .addCase(updateTask.fulfilled, (state, action: PayloadAction<TaskEntity>) => {
        state.tasks = state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, ...action.payload } : task,
        );
      });
  },
});

export const { actions: tasksActions, reducer: tasksReducer } = tasksSlice;
