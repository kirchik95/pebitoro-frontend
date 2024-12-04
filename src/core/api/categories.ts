import axios from 'axios';

import { CategoryEntity } from '@entities/Category';

export const categories = {
  getCategories: async () => {
    const response = await axios.get<CategoryEntity[]>('/categories');

    return response.data;
  },
  createCategory: async (data: { name: string; description?: string }) => {
    const response = await axios.post<CategoryEntity>('/categories', data);

    return response.data;
  },
  updateCategory: async (data: Partial<CategoryEntity>) => {
    const response = await axios.put<CategoryEntity>(`/categories/${data.id}`, data);

    return response.data;
  },
  deleteCategory: async (id: number) => {
    const response = await axios.delete<{ message: string }>(`/categories/${id}`);

    return response.data;
  },
};
