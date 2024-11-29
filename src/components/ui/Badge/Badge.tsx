import cn from 'classnames';

import s from './Badge.module.css';

interface BadgeProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  color?: 'gray' | 'purple' | 'red' | 'orange' | 'green' | 'blue' | 'indigo' | 'pink';
  dot?: boolean;
  value: string;
  onClick?: () => void;
}

export const Badge = ({
  className,
  size = 'sm',
  color = 'gray',
  dot,
  value,
  onClick,
}: BadgeProps) => {
  const handleClick = () => {
    onClick?.();
  };

  return (
    <div className={cn(s.root, s[size], s[color], className)} onClick={handleClick}>
      {dot && <span className={s.dot} />}
      {value}
    </div>
  );
};
