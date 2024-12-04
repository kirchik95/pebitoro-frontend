import * as React from 'react';
import { isEmpty } from 'lodash';
import { AnimatePresence, motion } from 'motion/react';
import cn from 'classnames';

import { Badge } from '@components/ui/Badge';
import { Icon } from '@components/ui/Icon';

import { Item } from './types';

import s from './TaskMetaItem.module.css';

interface TaskMetaItemProps {
  className?: string;
  field: string;
  icon?: string;
  label: string;
  selectedItems: Item[];
  dot?: boolean;
  multiple?: boolean;
  options?: Record<string, Item>;
  onClick: (field: string, option: string | number | number[]) => void;
}

export const TaskMetaItem = ({
  className,
  icon,
  field,
  label,
  selectedItems,
  dot,
  multiple = false,
  options = {},
  onClick,
}: TaskMetaItemProps) => {
  const [isDropdownVisible, setDropdownVisible] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  const hasOptions = !isEmpty(options);

  const toggleDropdown = () => {
    if (!hasOptions) return;

    setDropdownVisible((prev) => !prev);
  };

  const handleOptionClick = (option: string | number | number[]) => {
    if (multiple) {
      const selectedValues = selectedItems.map((item) => item.value);
      const optionValues = [...new Set([...selectedValues, option])];

      onClick(field, optionValues as number[]);

      return;
    } else {
      onClick(field, option);
    }

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
      <div className={s.item} ref={dropdownRef}>
        {selectedItems.length ? (
          selectedItems.map((item) => (
            <Badge
              key={item.label}
              className={s.badge}
              value={item.label}
              onClick={toggleDropdown}
              dot={dot}
              icon={item.icon}
              style={{
                backgroundColor: item.backgroundColor,
                borderColor: item.borderColor,
                color: item.color,
              }}
            />
          ))
        ) : (
          <span onClick={toggleDropdown}>+ add</span>
        )}
        {hasOptions && (
          <AnimatePresence>
            {isDropdownVisible && (
              <motion.div
                className={s.options}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
              >
                {Object.keys(options).map((key, index) => {
                  const isOptionSelected = selectedItems.some(
                    (item) => item.value === options[key].value,
                  );
                  return (
                    <span
                      key={`${key}_${index}`}
                      className={s.optionItem}
                      onClick={() => handleOptionClick(options[key].value)}
                      style={{
                        color: options[key].color,
                      }}
                    >
                      {options[key].label}
                      {isOptionSelected && <Icon name="check-circle" width={16} height={16} />}
                    </span>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};
