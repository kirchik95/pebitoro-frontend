import axios from 'axios';

import { TaskEntity } from '@entities/Task';

export type GetTasksParams = {
  search?: string;
  status?: string;
  priority?: string;
  categories?: number[];
};

export const tasks = {
  getTasks: async (params?: GetTasksParams) => {
    const response = await axios.get<TaskEntity[]>('/tasks', { params });

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
