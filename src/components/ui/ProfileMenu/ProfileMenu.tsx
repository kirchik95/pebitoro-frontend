import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import cn from 'classnames';

import { Avatar } from '../Avatar';
import { Icon } from '../Icon';

import s from './ProfileMenu.module.css';

interface ProfileMenuProps {
  className?: string;
}

export const ProfileMenu = ({ className }: ProfileMenuProps) => {
  const navigate = useNavigate();

  const [menu, setMenu] = React.useState(false);

  const menuRef = React.useRef<HTMLDivElement>(null);

  const handleSignOut = () => {
    localStorage.removeItem('token');

    navigate('/auth');
  };

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menu]);

  return (
    <div className={cn(s.root, className)} ref={menuRef}>
      <div className={s.avatar} onClick={() => setMenu(!menu)}>
        <Avatar size="md" />
      </div>

      <AnimatePresence>
        {menu && (
          <motion.div
            className={s.dropdown}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
          >
            <ul>
              <li>
                <Icon name="user" width={16} height={16} />
                My Profile
              </li>
              <li onClick={handleSignOut}>
                <Icon name="log-out" width={16} height={16} />
                Sign out
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
