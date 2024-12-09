import cn from 'classnames';

import { useAppSelector } from '@core/redux/hooks';

import { Badge } from '@components/ui/Badge';

import { getCategoriesHashMapByIdSelector } from '@shared/store/categories/selectors';

import s from './TaskCategories.module.css';

interface TaskCategoriesProps {
  className?: string;
  items: number[];
}

export const TaskCategories = ({ className, items }: TaskCategoriesProps) => {
  const categories = useAppSelector(getCategoriesHashMapByIdSelector);

  return (
    <div className={cn(s.root, className)}>
      {items.map((id) => (
        <Badge
          key={`CATEGORY_${id}`}
          className={s.category}
          value={categories[id].name}
          style={{
            color: categories[id].color,
            backgroundColor: categories[id].backgroundColor,
            borderColor: categories[id].color + '40',
          }}
        />
      ))}
    </div>
  );
};
