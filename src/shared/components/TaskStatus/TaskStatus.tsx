import cn from 'classnames';

import { TaskEntity } from '@entities/Task';

import { Badge } from '@components/ui/Badge';

import { TASK_STATUSES } from './constants';

import s from './TaskStatus.module.css';

interface TaskStatusProps {
  className?: string;
  value: TaskEntity['status'];
}

export const TaskStatus = ({ className, value }: TaskStatusProps) => {
  return (
    <Badge
      className={cn(s.root, className)}
      iconSize={14}
      icon={TASK_STATUSES[value].icon}
      value={TASK_STATUSES[value].label}
    />
  );
};
