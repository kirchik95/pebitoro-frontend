import cn from 'classnames';

import { Textarea } from '@components/ui/Textarea';

import s from './TaskTitle.module.css';

interface TaskTitleProps {
  className?: string;

  value: string;
  onChange: (field: 'title', value: string) => void;
}

export const TaskTitle = ({ className, value, onChange }: TaskTitleProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange('title', event.target.value);
  };

  return (
    <Textarea
      className={cn(s.root, className)}
      placeholder="Task name"
      value={value}
      onChange={(event) => handleChange(event)}
    />
  );
};
