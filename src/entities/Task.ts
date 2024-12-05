export interface TaskEntity {
  id: number;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  status: 'backlog' | 'todo' | 'in_progress' | 'done' | 'archived';
  categories: number[] | [];
  createdAt: string;
  updatedAt: string;
}
