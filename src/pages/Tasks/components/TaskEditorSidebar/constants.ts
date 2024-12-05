import { TaskEntity } from '@entities/Task';

export const DEFAULT_TASK_DATA: Omit<TaskEntity, 'id' | 'createdAt' | 'updatedAt'> = {
  title: '',
  description: '',
  priority: 'low',
  status: 'backlog',
  categories: [],
};
