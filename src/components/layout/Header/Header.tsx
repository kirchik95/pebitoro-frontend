import cn from 'classnames';

import { ProfileMenu } from '@components/ui/ProfileMenu';

import { PageTitle } from '../PageTitle';

import s from './Header.module.css';

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  return (
    <div className={cn(s.root, className)}>
      <PageTitle />
      <ProfileMenu className={s.profile} />
    </div>
  );
};
