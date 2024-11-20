import { motion } from 'motion/react';
import cn from 'classnames';

import { TaskEntity } from '@entities/Task';

import { Text } from '@components/typography/Text';
import { Button } from '@components/ui/Button';
import { Checkbox } from '@components/ui/Checkbox';
import { Icon } from '@components/ui/Icon';

import s from './Task.module.css';

interface TaskProps {
  className?: string;
  item: TaskEntity;
  onChange: (data: Partial<TaskEntity>) => void;
  onEdit: () => void;
  onDelete: (id: number) => void;
}

export const Task = ({ className, item, onChange, onEdit, onDelete }: TaskProps) => {
  const handleDelete = () => {
    onDelete(item.id);
  };

  const handleChange = () => {
    onChange({ id: item.id, status: item.status === 'completed' ? 'created' : 'completed' });
  };

  const handleEdit = () => {
    onEdit();
  };

  return (
    <motion.div
      className={cn(s.root, className)}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <div className={s.header}>
        <Checkbox
          size="md"
          label={item.title}
          onChange={handleChange}
          value={item.status === 'completed'}
        />
        <div className={s.actions}>
          <Button className={cn(s.button, s.edit)} theme="secondary" onClick={handleEdit}>
            <Icon name="pencil" width={16} height={16} />
          </Button>
          <Button className={cn(s.button, s.delete)} theme="secondary" onClick={handleDelete}>
            <Icon name="trash" width={16} height={16} />
          </Button>
        </div>
      </div>
      <Text className={s.description}>{item.description}</Text>
    </motion.div>
  );
};
