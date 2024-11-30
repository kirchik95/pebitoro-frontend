import cn from 'classnames';

import { TaskEntity } from '@entities/Task';

import { Badge } from '@components/ui/Badge';

import { TASK_PRIORITIES } from './constants';

import s from './TaskPriority.module.css';

interface TaskPriorityProps {
  className?: string;
  value: TaskEntity['priority'];
}

export const TaskPriority = ({ className, value }: TaskPriorityProps) => {
  return (
    <Badge
      className={cn(s.root, className)}
      value={TASK_PRIORITIES[value].label}
      style={{
        backgroundColor: TASK_PRIORITIES[value].backgroundColor,
        color: TASK_PRIORITIES[value].color,
      }}
    />
  );
};
