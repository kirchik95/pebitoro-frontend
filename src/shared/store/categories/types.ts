import { CategoryEntity } from '@entities/Category';

export type InitialState = {
  status: 'idle' | 'loading' | 'success' | 'error';
  items: CategoryEntity[] | [];
  error: string | null;
};
