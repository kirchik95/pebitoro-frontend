import cn from 'classnames';

import { Icon } from '../Icon';

import s from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  theme?: 'primary' | 'secondary' | 'tertiary' | 'link' | 'danger';
  disabled?: boolean;
  icon?: React.ReactNode | string;

  children?: React.ReactNode;
  onClick: () => void;
}

export const Button = (props: ButtonProps) => {
  const {
    className,
    size = 'md',
    theme = 'primary',
    disabled,
    icon,
    children,
    onClick,
    ...otherProps
  } = props;

  return (
    <button
      className={cn(s.root, s[size], s[theme], className, { [s.disabled]: disabled })}
      onClick={onClick}
      {...otherProps}
    >
      {icon && (
        <span className={s.icon}>
          {typeof icon !== 'string' ? icon : <Icon name={icon} width={20} height={20} />}
        </span>
      )}
      {children}
    </button>
  );
};
