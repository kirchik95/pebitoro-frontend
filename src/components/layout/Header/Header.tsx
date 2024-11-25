import cn from 'classnames';

import { Avatar } from '@components/ui/Avatar';

import { PageTitle } from '../PageTitle';

import s from './Header.module.css';

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  return (
    <div className={cn(s.root, className)}>
      <PageTitle />
      <Avatar className={s.avatar} size="md" />
    </div>
  );
};
