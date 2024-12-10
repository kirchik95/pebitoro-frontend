import * as React from 'react';

import { tasks } from '@core/api/tasks';

export const useTasksCount = () => {
  const [tasksCount, setTasksCount] = React.useState<Record<string, number>>({});

  const getTasksCount = React.useCallback(async (countBy: 'status' | 'priority' | 'category') => {
    const response = await tasks.getTasksCount(countBy);
    setTasksCount(response);
  }, []);

  React.useEffect(() => {
    void getTasksCount('status');
  }, [getTasksCount]);

  return { tasksCount };
};
