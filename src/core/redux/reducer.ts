import { categoriesReducer } from 'src/shared/store/categories/slice';

import { authReducer } from '@pages/Auth/store/slice';
import { tasksReducer } from '@pages/Tasks/store/slice';

export const reducer = {
  auth: authReducer,
  categories: categoriesReducer,
  tasks: tasksReducer,
};
