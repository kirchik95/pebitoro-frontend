import cn from 'classnames';

import { Icon } from '../Icon';

import s from './Tag.module.css';

interface TagProps {
  className?: string;
  icon?: string;
  size?: 'sm' | 'md' | 'lg';
  style?: React.CSSProperties;
  value: string;
}

export const Tag = ({ className, icon, size = 'sm', style = {}, value }: TagProps) => {
  return (
    <div className={cn(s.root, s[size], className)} style={style}>
      {icon && <Icon name={icon} width={16} height={16} />}
      <span>{value}</span>
    </div>
  );
};
