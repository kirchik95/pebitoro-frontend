export interface TaskEntity {
  id: number;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  status: 'created' | 'in_progress' | 'done' | 'archived';
  category: string;
  createdAt: string;
  updatedAt: string;
}
