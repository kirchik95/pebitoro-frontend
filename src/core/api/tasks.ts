import axios from 'axios';

import { TaskEntity } from '@entities/Task';

export const tasks = {
  getTasks: async () => {
    const response = await axios.get<TaskEntity[]>('/tasks');

    return response.data;
  },
  createTask: async (data: { title: string; description?: string }) => {
    const response = await axios.post<TaskEntity>('/tasks', data);

    return response.data;
  },
  updateTask: async (data: Partial<TaskEntity>) => {
    const response = await axios.put<TaskEntity>(`/tasks/${data.id}`, data);

    return response.data;
  },
  deleteTask: async (id: number) => {
    const response = await axios.delete<{ message: string }>(`/tasks/${id}`);

    return response.data;
  },
};
