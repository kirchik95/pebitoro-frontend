import { NavLink } from 'react-router';
import cn from 'classnames';

import { Icon } from '@components/ui/Icon';
import { Logo } from '@components/ui/Logo';

import s from './Navbar.module.css';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <nav className={cn(s.root, className)}>
      <Logo />
      <NavLink className={({ isActive }) => cn(s.link, { [s.active]: isActive })} to="/">
        <Icon name="home" />
        Home
      </NavLink>
      <NavLink className={({ isActive }) => cn(s.link, { [s.active]: isActive })} to="/tasks">
        <Icon name="tasks" />
        Tasks
      </NavLink>
    </nav>
  );
};
