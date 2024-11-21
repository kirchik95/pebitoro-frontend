import * as React from 'react';
import cn from 'classnames';

import s from './Textarea.module.css';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  title?: string;
  value: string;

  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
  const { className, title, onChange, ...otherProps } = props;

  return (
    <div className={cn(s.root, className)}>
      {title && <label>{title}</label>}
      <textarea ref={ref} onChange={onChange} {...otherProps} />
    </div>
  );
});

Textarea.displayName = 'Textarea';
