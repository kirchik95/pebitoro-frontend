import cn from 'classnames';

import { Icon } from '../Icon';

import s from './Avatar.module.css';

interface AvatarProps {
  className?: string;
  src?: string;
  alt?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export const Avatar = ({ className, src, alt, size = 'sm' }: AvatarProps) => {
  const iconSize = {
    xs: { width: 16, height: 16 },
    sm: { width: 20, height: 20 },
    md: { width: 24, height: 24 },
    lg: { width: 28, height: 28 },
    xl: { width: 32, height: 32 },
  };

  return (
    <div className={cn(s.root, s[size], className)}>
      {src ? (
        <img className={s.avatar} src={src} alt={alt} />
      ) : (
        <Icon name="user" width={iconSize[size].width} height={iconSize[size].height} />
      )}
    </div>
  );
};
