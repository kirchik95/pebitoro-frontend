import cn from 'classnames';

import s from './Avatar.module.css';

interface AvatarProps {
  className?: string;
  src?: string;
  alt?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export const Avatar = ({ className, src, alt, size = 'sm' }: AvatarProps) => {
  return (
    <div className={cn(s.root, s[size], className)}>
      {src ? <img className={s.avatar} src={src} alt={alt} /> : alt}
    </div>
  );
};
