import * as React from 'react';
import { AnimatePresence } from 'motion/react';

import { useAppDispatch, useAppSelector } from '@core/redux/hooks';

import { TaskEntity } from '@entities/Task';

import { Title } from '@components/typography/Title';
import { Button } from '@components/ui/Button';

import { Task } from './components/Task';
import { TaskEditorSidebar } from './components/TaskEditorSidebar';
import { deleteTask, getTasks, updateTask } from './store/actions';
import { getTasksSelector } from './store/selectors';

import s from './Tasks.module.css';

export const Tasks = () => {
  const dispatch = useAppDispatch();

  const [sidebar, setSidebar] = React.useState<{ open: boolean; task: TaskEntity | null }>({
    open: false,
    task: null,
  });

  const tasks = useAppSelector(getTasksSelector);

  const handleDeleteTask = (id: number) => {
    void dispatch(deleteTask(id));
  };

  const handleChangeTask = (data: Pick<TaskEntity, 'id' | 'status'>) => {
    void dispatch(updateTask(data));
  };

  const handleEditTask = (data: TaskEntity) => {
    setSidebar({ open: true, task: data });
  };

  const handleCloseSidebar = () => {
    setSidebar({ open: false, task: null });
  };

  React.useEffect(() => {
    void dispatch(getTasks());
  }, [dispatch]);

  return (
    <div>
      <div className={s.header}>
        <Title>Tasks</Title>
      </div>
      <div className={s.actions}>
        <Button size="sm" onClick={() => setSidebar({ ...sidebar, open: true })} icon="plus">
          Add Task
        </Button>
      </div>
      <AnimatePresence initial={false}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            item={task}
            onChange={handleChangeTask}
            onEdit={handleEditTask}
            onDelete={handleDeleteTask}
          />
        ))}
      </AnimatePresence>

      <TaskEditorSidebar
        isOpen={sidebar.open}
        onClose={handleCloseSidebar}
        {...(sidebar.task && { item: sidebar.task })}
      />
    </div>
  );
};
