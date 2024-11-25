import { UserEntity } from '@entities/User';

export type InitialState = {
  status: 'idle' | 'loading' | 'success' | 'error';
  isAuthenticated: boolean;
  user: UserEntity | null;
  error: string | null;
};
