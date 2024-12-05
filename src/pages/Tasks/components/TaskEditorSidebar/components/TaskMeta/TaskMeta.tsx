import { TASK_PRIORITIES, TASK_STATUSES } from 'src/shared/constants/task/constants';
import { getCategoriesItemsSelector } from 'src/shared/store/categories/selectors';
import cn from 'classnames';

import { useAppSelector } from '@core/redux/hooks';

import { getCategoryItems, getCategoryOptions } from '../../helpers';
import { TaskMetaItem } from '../TaskMetaItem';

import s from './TaskMeta.module.css';

interface TaskMetaProps {
  className?: string;
  status: 'backlog' | 'todo' | 'in_progress' | 'done' | 'archived';
  priority: 'low' | 'medium' | 'high';
  categories: number[] | [];
  onChange: (field: string, value: string | number | number[]) => void;
}

export const TaskMeta = ({ className, status, priority, categories, onChange }: TaskMetaProps) => {
  const categoryItems = useAppSelector(getCategoriesItemsSelector);

  const handleOptionClick = (field: string, option: string | number | number[]) => {
    onChange(field, option);
  };

  return (
    <div className={cn(s.root, className)}>
      <TaskMetaItem
        icon="check-verified"
        field="status"
        label="Status"
        selectedItems={[TASK_STATUSES[status]]}
        options={TASK_STATUSES}
        onClick={handleOptionClick}
      />

      <TaskMetaItem
        icon="flag"
        field="priority"
        label="Priority"
        selectedItems={[TASK_PRIORITIES[priority]]}
        options={TASK_PRIORITIES}
        onClick={handleOptionClick}
      />

      <TaskMetaItem
        icon="tag"
        field="categories"
        label="Category"
        selectedItems={getCategoryItems(categories, categoryItems)}
        multiple
        options={getCategoryOptions(categoryItems)}
        onClick={handleOptionClick}
      />
    </div>
  );
};
