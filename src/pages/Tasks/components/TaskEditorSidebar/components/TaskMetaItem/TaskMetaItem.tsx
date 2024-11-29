import * as React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import cn from 'classnames';

import { Badge } from '@components/ui/Badge';
import { Icon } from '@components/ui/Icon';

import s from './TaskMetaItem.module.css';

interface TaskMetaItemProps {
  className?: string;
  field: string;
  icon?: string;
  label: string;
  value: string;
  dot?: boolean;
  options?: Record<string, string>;
  onClick?: (field: string, option: string) => void;
}

export const TaskMetaItem = ({
  className,
  icon,
  field,
  label,
  value,
  dot,
  options = {},
  onClick,
}: TaskMetaItemProps) => {
  const [isDropdownVisible, setDropdownVisible] = React.useState(false);

  const dropdownRef = React.useRef<HTMLDivElement>(null);

  const hasOptions = Boolean(Object.keys(options).length);

  const toggleDropdown = () => {
    if (!hasOptions) return;

    setDropdownVisible(!isDropdownVisible);
  };

  const handleOptionClick = (option: string) => {
    onClick?.(field, option);
    setDropdownVisible(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setDropdownVisible(false);
    }
  };

  React.useEffect(() => {
    if (isDropdownVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownVisible]);

  return (
    <div className={cn(s.root, className)}>
      {icon && <Icon name={icon} width={16} height={16} />}
      <span className={s.name}>{label}</span>
      <div className={s.value} ref={dropdownRef}>
        <Badge value={value} onClick={toggleDropdown} dot={dot} />
        {hasOptions && (
          <AnimatePresence>
            {isDropdownVisible && (
              <motion.div
                className={s.options}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
              >
                {Object.keys(options).map((key, index) => (
                  <span
                    key={`${key}_${index}`}
                    className={s.optionItem}
                    onClick={() => handleOptionClick(key)}
                  >
                    {options[key]}
                  </span>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};
