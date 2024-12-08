import * as React from 'react';
import cn from 'classnames';

import { Icon } from '../Icon';

import s from './Input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
  value?: string;
  icon?: string;

  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = (props: InputProps) => {
  const { className, label, icon, onChange, ...otherProps } = props;

  return (
    <div className={cn(s.root, className)}>
      {label && <label>{label}</label>}
      <div className={s.inputWrapper}>
        {icon && <Icon className={s.icon} name={icon} width={20} height={20} />}
        <input
          className={cn(s.input, { [s.paddingLeft]: icon })}
          onChange={onChange}
          {...otherProps}
        />
      </div>
    </div>
  );
};
