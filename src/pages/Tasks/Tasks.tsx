import * as React from 'react';
import { AnimatePresence } from 'motion/react';
import cn from 'classnames';

import { useAppDispatch, useAppSelector } from '@core/redux/hooks';

import { TaskEntity } from '@entities/Task';

import { Title } from '@components/typography/Title';
import { Button } from '@components/ui/Button';
import { Sidebar } from '@components/ui/Sidebar';

import { Task } from './components/Task';
import { createTask, deleteTask, getTasks, updateTask } from './store/actions';
import { getTasksSelector } from './store/selectors';

import s from './Tasks.module.css';

export const Tasks = () => {
  const dispatch = useAppDispatch();

  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const tasks = useAppSelector(getTasksSelector);

  const handleCreateTask = () => {
    void dispatch(
      createTask({
        title: `Task ${tasks.length + 1}`,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      }),
    );
  };

  const handleDeleteTask = (id: number) => {
    void dispatch(deleteTask(id));
  };

  const handleUpdateTask = (data: Partial<TaskEntity>) => {
    void dispatch(updateTask(data));
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
        <Button size="sm" onClick={handleCreateTask} icon="plus">
          Add Task
        </Button>
      </div>
      <AnimatePresence>
        {tasks.map((task) => (
          <Task
            key={task.id}
            item={task}
            onChange={handleUpdateTask}
            onEdit={() => setIsSidebarOpen(true)}
            onDelete={handleDeleteTask}
          />
        ))}
      </AnimatePresence>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} title="Task Editor">
        <div>Hello</div>
      </Sidebar>
    </div>
  );
};
