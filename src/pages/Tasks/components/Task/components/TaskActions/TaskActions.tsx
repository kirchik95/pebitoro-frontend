import * as React from 'react';
import { useClickAway } from 'react-use';
import { AnimatePresence, motion } from 'motion/react';
import cn from 'classnames';

import { Button } from '@components/ui/Button';
import { Icon } from '@components/ui/Icon';

import s from './TaskActions.module.css';

interface TaskActionsProps {
  className?: string;

  onEdit: () => void;
  onDelete: () => void;
}

export const TaskActions = ({ className, onEdit, onDelete }: TaskActionsProps) => {
  const [menuVisible, setMenuVisible] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);

  useClickAway(menuRef, () => setMenuVisible(false), ['mousedown']);

  const handleDelete = () => {
    onDelete();
    setMenuVisible(false);
  };

  const handleEdit = () => {
    onEdit();
    setMenuVisible(false);
  };

  return (
    <div className={cn(s.root, className)}>
      <Button
        className={cn(s.button, s.more, { [s.open]: menuVisible })}
        theme="secondary"
        onClick={() => setMenuVisible(!menuVisible)}
      >
        <Icon name="dots-vertical" width={16} height={16} />
      </Button>
      <AnimatePresence>
        {menuVisible && (
          <motion.div
            className={s.actions}
            ref={menuRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', bounce: 0.2, duration: 0.25 }}
          >
            <Button className={cn(s.button, s.edit)} theme="secondary" onClick={handleEdit}>
              <Icon name="pencil" width={16} height={16} />
              Edit
            </Button>
            <Button className={cn(s.button, s.delete)} theme="secondary" onClick={handleDelete}>
              <Icon name="trash" width={16} height={16} />
              Delete
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
