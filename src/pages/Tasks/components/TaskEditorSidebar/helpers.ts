import { CategoryEntity } from '@entities/Category';

export const getCategoryOptions = (items: CategoryEntity[]) =>
  items.reduce(
    (acc, item) => ({
      ...acc,
      [item.id]: {
        label: item.name,
        value: item.id,
        color: item.color,
        backgroundColor: item.backgroundColor,
      },
    }),
    {},
  );

export const getCategoryItems = (items: number[], categories: CategoryEntity[]) => {
  const categoryOptions: Record<
    number,
    { label: string; value: number; color: string; backgroundColor: string }
  > = getCategoryOptions(categories);

  return items.map((category) => categoryOptions[category]);
};
