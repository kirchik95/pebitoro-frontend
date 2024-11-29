import cn from 'classnames';

import { Textarea } from '@components/ui/Textarea';

import s from './TaskDescription.module.css';

interface TaskDescriptionProps {
  className?: string;
  value: string;
  onChange: (field: 'description', value: string) => void;
}

export const TaskDescription = ({ className, value, onChange }: TaskDescriptionProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange('description', event.target.value);
  };

  return (
    <Textarea
      className={cn(s.root, className)}
      placeholder="What is task about?"
      value={value}
      onChange={(event) => handleChange(event)}
    />
  );
};
