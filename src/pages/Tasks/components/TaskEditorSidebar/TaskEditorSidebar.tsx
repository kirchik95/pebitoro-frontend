import * as React from 'react';
import cn from 'classnames';

import { useAppDispatch } from '@core/redux/hooks';

import { TaskEntity } from '@entities/Task';

import { Button } from '@components/ui/Button';
import { Input } from '@components/ui/Input';
import { Sidebar } from '@components/ui/Sidebar';
import { Textarea } from '@components/ui/Textarea';

import { createTask } from '@pages/Tasks/store/actions';

import s from './TaskEditorSidebar.module.css';

interface TaskEditorSidebarProps {
  className?: string;
  isOpen: boolean;
  item?: TaskEntity;
  onClose: () => void;
}

export const TaskEditorSidebar = ({ className, isOpen, item, onClose }: TaskEditorSidebarProps) => {
  const dispatch = useAppDispatch();

  const [data, setData] = React.useState({
    title: item?.title || '',
    description: item?.description || '',
  });

  const handleChange = (
    field: string,
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setData({ ...data, [field]: event.target.value });
  };

  const handleConfirm = async () => {
    await dispatch(createTask(data));

    onClose();
  };

  React.useEffect(() => {
    setData(item ? item : { title: '', description: '' });
  }, [item]);

  console.log(data);
  console.log(item);

  return (
    <Sidebar isOpen={isOpen} onClose={onClose}>
      <div className={cn(s.root, className)}>
        <div className={s.content}>
          <Input
            className={s.input}
            title="Title:"
            value={data.title}
            onChange={(event) => handleChange('title', event)}
          />
          <Textarea
            className={s.textarea}
            title="Description:"
            placeholder="Add your description..."
            value={data.description}
            onChange={(event) => handleChange('description', event)}
          />
        </div>
        <div className={s.footer}>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={handleConfirm}>Save</Button>
        </div>
      </div>
    </Sidebar>
  );
};
