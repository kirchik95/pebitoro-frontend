import * as React from 'react';
import ReactDOM from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import cn from 'classnames';

import { Title } from '@components/typography/Title';

import { Button } from '../Button';

import s from './Sidebar.module.css';

interface SidebarProps {
  className?: string;
  title?: string | React.ReactNode;
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

export const Sidebar = ({ className, title, isOpen, children, onClose }: SidebarProps) => {
  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={s.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: 'ease-in-out' }}
          onClick={onClose}
        >
          <motion.div
            className={cn(s.root, className)}
            initial={{ x: '100%' }}
            animate={{ x: isOpen ? 0 : '100%' }}
            exit={{ x: '100%' }}
            transition={{ type: 'ease-in-out' }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className={s.header}>
              <Title as="h2">{title}</Title>
              <Button className={s.button} theme="secondary" icon="close" onClick={onClose} />
            </div>
            <div className={s.content}>{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.getElementById('modal')!,
  );
};
