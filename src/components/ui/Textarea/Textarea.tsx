import * as React from 'react';
import cn from 'classnames';

import s from './Textarea.module.css';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  title?: string;
  value: string;

  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const Textarea = ({ className, title, value, onChange, ...otherProps }: TextareaProps) => {
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  React.useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    event.target.style.height = 'auto';
    event.target.style.height = `${event.target.scrollHeight}px`;
    onChange(event);
  };

  return (
    <div className={cn(s.root, className)}>
      {title && <label>{title}</label>}
      <textarea ref={textareaRef} onChange={handleChange} value={value} {...otherProps} />
    </div>
  );
};
