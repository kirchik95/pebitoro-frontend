import * as React from 'react';
import cn from 'classnames';

import { Icon } from '../Icon';

import s from './Checkbox.module.css';

interface CheckboxProps {
  className?: string;
  size?: 'sm' | 'md';
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
}

export const Checkbox = ({ className, label, size = 'sm', value, onChange }: CheckboxProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  const iconSettings = size === 'sm' ? { width: 12, height: 12 } : { width: 14, height: 14 };

  return (
    <div className={cn(s.root, className, s[size])}>
      <label className={s.label}>
        <input
          type="checkbox"
          className={s.checkbox}
          onChange={handleChange}
          aria-checked={value}
          aria-label={label}
        />
        <div className={cn(s.iconWrapper, { [s.checked]: value })}>
          <Icon name="check" {...iconSettings} />
        </div>
        <span className={s.title}>{label}</span>
      </label>
    </div>
  );
};
