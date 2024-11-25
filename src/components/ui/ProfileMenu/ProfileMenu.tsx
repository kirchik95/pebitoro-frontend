import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import cn from 'classnames';

import { UserEntity } from '@entities/User';

import { Avatar } from '../Avatar';
import { Icon } from '../Icon';

import s from './ProfileMenu.module.css';

interface ProfileMenuProps {
  className?: string;
  user: UserEntity | null;
}

export const ProfileMenu = ({ className, user }: ProfileMenuProps) => {
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
        <Avatar size="md" alt={`${user?.firstName.slice(0, 1)}${user?.lastName.slice(0, 1)}`} />
      </div>

      <AnimatePresence>
        {menu && (
          <motion.div
            className={s.dropdown}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
          >
            <div className={s.dropdownHeader}>
              <Avatar
                size="lg"
                alt={`${user?.firstName.slice(0, 1)}${user?.lastName.slice(0, 1)}`}
              />
              <div className={s.user}>
                <span className={s.fullName}>
                  {user?.firstName} {user?.lastName}
                </span>
                <span className={s.email}>{user?.email}</span>
              </div>
            </div>
            <ul className={s.list}>
              <li className={s.listItem}>
                <Icon name="user" width={18} height={18} />
                My Profile
              </li>
              <li className={s.listItem} onClick={handleSignOut}>
                <Icon name="log-out" width={18} height={18} />
                Sign out
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
