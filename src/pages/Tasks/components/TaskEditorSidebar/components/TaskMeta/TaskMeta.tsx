import cn from 'classnames';

import { TaskMetaItem } from '../TaskMetaItem';

import { TASK_PRIORITIES, TASK_STATUSES } from './constants';

import s from './TaskMeta.module.css';

interface TaskMetaProps {
  className?: string;
  status: 'created' | 'in_progress' | 'done' | 'archived';
  priority: 'low' | 'medium' | 'high';
  category: string;
  onChange: (field: string, value: string) => void;
}

export const TaskMeta = ({ className, status, priority, category, onChange }: TaskMetaProps) => {
  const handleOptionClick = (field: string, option: string) => {
    onChange(field, option);
  };

  return (
    <div className={cn(s.root, className)}>
      <TaskMetaItem
        icon="check-verified"
        field="status"
        label="Status"
        value={TASK_STATUSES[status]}
        dot
        options={TASK_STATUSES}
        onClick={handleOptionClick}
      />

      <TaskMetaItem
        icon="flag"
        field="priority"
        label="Priority"
        value={TASK_PRIORITIES[priority]}
        options={TASK_PRIORITIES}
        onClick={handleOptionClick}
      />

      <TaskMetaItem icon="tag" field="category" label="Category" value={category} />
    </div>
  );
};
