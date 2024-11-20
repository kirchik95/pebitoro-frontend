import cn from 'classnames';

import { As, Size } from './types';

import s from './Title.module.css';

interface TitleProps {
  className?: string;
  size?: Size;
  as?: As;

  children: React.ReactNode;
}

export const Title = ({ className, size = 'sm', as = 'h1', children }: TitleProps) => {
  const Component = as;

  return <Component className={cn(s.root, s[size], className)}>{children}</Component>;
};
