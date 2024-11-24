import * as React from 'react';
import ReactDOM from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import cn from 'classnames';

import { Button } from '../Button';
import { Icon } from '../Icon';

import s from './Sidebar.module.css';

interface SidebarProps {
  className?: string;
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

export const Sidebar = ({ className, isOpen, children, onClose }: SidebarProps) => {
  const handleClose = React.useCallback(
    (event: React.MouseEvent | KeyboardEvent) => {
      if (!isOpen) return;

      if (event.type === 'click' || (event as KeyboardEvent).key === 'Escape') {
        onClose();
      }
    },
    [isOpen, onClose],
  );

  React.useEffect(() => {
    document.addEventListener('keydown', handleClose);

    return () => {
      document.removeEventListener('keydown', handleClose);
    };
  }, [handleClose]);

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={s.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: 'tween', ease: 'easeInOut' }}
          onClick={handleClose}
        >
          <motion.div
            className={cn(s.root, className)}
            initial={{ x: '100%' }}
            animate={{ x: isOpen ? 0 : '100%' }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', ease: 'easeInOut' }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className={s.header}>
              <Button className={s.button} theme="secondary" onClick={onClose}>
                <Icon name="close" />
              </Button>
            </div>
            <div className={s.content}>{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.getElementById('modal')!,
  );
};
