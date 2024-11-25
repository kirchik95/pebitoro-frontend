import cn from 'classnames';

import { useAppSelector } from '@core/redux/hooks';

import { ProfileMenu } from '@components/ui/ProfileMenu';

import { getAuthUserSelector } from '@pages/Auth/store/selectors';

import { PageTitle } from '../PageTitle';

import s from './Header.module.css';

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  const user = useAppSelector(getAuthUserSelector);

  return (
    <div className={cn(s.root, className)}>
      <PageTitle />
      <ProfileMenu className={s.profile} user={user} />
    </div>
  );
};
