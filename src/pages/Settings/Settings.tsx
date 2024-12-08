import cn from 'classnames';

import s from './Settings.module.css';

interface SettingsProps {
  className?: string;
}

export const Settings = ({ className }: SettingsProps) => {
  return <div className={cn(s.root, className)}></div>;
};
