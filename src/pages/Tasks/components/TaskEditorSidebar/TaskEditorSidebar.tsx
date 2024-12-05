import * as React from 'react';
import cn from 'classnames';

import { useAppDispatch } from '@core/redux/hooks';
import { getChangedFields } from '@core/utils/getChangedFields';

import { TaskEntity } from '@entities/Task';

import { Button } from '@components/ui/Button';
import { Sidebar } from '@components/ui/Sidebar';

import { createTask, updateTask } from '@pages/Tasks/store/actions';

import { TaskDescription } from './components/TaskDescription';
import { TaskMeta } from './components/TaskMeta';
import { TaskTitle } from './components/TaskTitle';
import { DEFAULT_TASK_DATA } from './constants';

import s from './TaskEditorSidebar.module.css';

interface TaskEditorSidebarProps {
  className?: string;
  isOpen: boolean;
  item?: TaskEntity;
  onClose: () => void;
}

export const TaskEditorSidebar = ({ className, isOpen, item, onClose }: TaskEditorSidebarProps) => {
  const dispatch = useAppDispatch();

  const [data, setData] = React.useState(() => ({ ...DEFAULT_TASK_DATA, ...item }));

  const handleChange = React.useCallback((field: string, value: string | number | number[]) => {
    setData((prevData) => ({ ...prevData, [field]: value }));
  }, []);

  const handleConfirm = async () => {
    if (item) {
      const fields = getChangedFields(item, data);

      await dispatch(updateTask({ id: item.id, ...fields }));
    } else {
      await dispatch(createTask(data));
    }

    setData(DEFAULT_TASK_DATA);
    onClose();
  };

  React.useEffect(() => {
    setData({ ...DEFAULT_TASK_DATA, ...item });
  }, [item]);

  return (
    <Sidebar isOpen={isOpen} onClose={onClose}>
      <div className={cn(s.root, className)}>
        <div className={s.content}>
          <TaskTitle value={data.title} onChange={handleChange} />
          <TaskDescription value={data.description} onChange={handleChange} />
          <TaskMeta
            status={data.status}
            priority={data.priority}
            categories={data.categories}
            onChange={handleChange}
          />
        </div>

        <div className={s.footer}>
          <Button theme="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleConfirm}>{item ? 'Save' : 'Create'}</Button>
        </div>
      </div>
    </Sidebar>
  );
};
