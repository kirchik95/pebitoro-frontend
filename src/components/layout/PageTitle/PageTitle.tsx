import { useLocation } from 'react-router';
import cn from 'classnames';

import { Title } from '@components/typography/Title';

import s from './PageTitle.module.css';

interface PageTitleProps {
  className?: string;
}

export const PageTitle = ({ className }: PageTitleProps) => {
  const location = useLocation();

  const url = location.pathname.split('/').pop();
  const page = url ? url : 'Welcome';

  return <Title className={cn(s.root, className)}>{page}</Title>;
};
