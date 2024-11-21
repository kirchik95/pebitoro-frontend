import * as React from 'react';
import cn from 'classnames';

import s from './Input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  title?: string;
  value?: string;

  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, title, onChange, ...otherProps } = props;

  return (
    <div className={cn(s.root, className)}>
      {title && <label>{title}</label>}
      <input ref={ref} onChange={onChange} {...otherProps} />
    </div>
  );
});

Input.displayName = 'Input';
