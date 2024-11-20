export interface TaskEntity {
  id: number;
  title: string;
  description: string;
  status: 'created' | 'completed';
  createdAt: string;
  updatedAt: string;
}
