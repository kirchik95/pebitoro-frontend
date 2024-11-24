import { authReducer } from '@pages/Auth/store/slice';
import { tasksReducer } from '@pages/Tasks/store/slice';

export const reducer = {
  auth: authReducer,
  tasks: tasksReducer,
};
