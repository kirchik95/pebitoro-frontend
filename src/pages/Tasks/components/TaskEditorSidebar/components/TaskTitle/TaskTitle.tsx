import cn from 'classnames';

import { Input } from '@components/ui/Input';

import s from './TaskTitle.module.css';

interface TaskTitleProps {
  className?: string;

  value: string;
  onChange: (field: 'title', value: string) => void;
}

export const TaskTitle = ({ className, value, onChange }: TaskTitleProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange('title', event.target.value);
  };

  return (
    <Input
      className={cn(s.root, className)}
      placeholder="Task name"
      value={value}
      onChange={(event) => handleChange(event)}
    />
  );
};
