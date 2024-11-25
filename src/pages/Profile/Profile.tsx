import cn from 'classnames';

import s from './Profile.module.css';

interface ProfileProps {
  className?: string;
}

export const Profile = ({ className }: ProfileProps) => {
  return <div className={cn(s.root, className)}></div>;
};
