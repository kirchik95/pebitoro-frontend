import cn from 'classnames';

import { Size } from './types';

import s from './Text.module.css';

interface TextProps {
  className?: string;
  size?: Size;

  children: React.ReactNode;
}

export const Text = ({ className, size = 'sm', children }: TextProps) => {
  return <p className={cn(s.root, s[size], className)}>{children}</p>;
};
