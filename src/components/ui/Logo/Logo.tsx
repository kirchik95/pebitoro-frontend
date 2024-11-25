import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import s from './Logo.module.css';

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <NavLink className={cn(s.root, className)} to="/">
      <img src="/images/logo.svg" />
      Pebitoro
    </NavLink>
  );
};
