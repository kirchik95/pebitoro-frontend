import cn from 'classnames';

import { Icon } from '../Icon';

import s from './Badge.module.css';

interface BadgeProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  color?: 'gray' | 'purple' | 'red' | 'orange' | 'green' | 'blue' | 'indigo' | 'pink';
  dot?: boolean;
  icon?: string;
  iconSize?: number;
  value: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const Badge = ({
  className,
  size = 'sm',
  color = 'gray',
  dot,
  icon,
  iconSize = 16,
  value,
  style = {},
  onClick,
}: BadgeProps) => {
  const handleClick = () => {
    onClick?.();
  };

  return (
    <div className={cn(s.root, s[size], s[color], className)} style={style} onClick={handleClick}>
      {icon && <Icon name={icon} width={iconSize} height={iconSize} />}
      {dot && <span className={s.dot} />}
      {value}
    </div>
  );
};
