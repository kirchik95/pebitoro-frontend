export type InitialState = {
  status: 'idle' | 'loading' | 'success' | 'error';
  isAuthenticated: boolean;
  error: string | null;
};
