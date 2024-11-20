import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import s from './Header.module.css';

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  return (
    <header className={cn(s.root, className)}>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/tasks">Tasks</NavLink>
      </nav>
    </header>
  );
};
