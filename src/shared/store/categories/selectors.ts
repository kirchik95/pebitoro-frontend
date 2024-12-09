import { keyBy } from 'lodash';

import { RootState } from '@core/redux/store';

const getCategoryStateSelector = (state: RootState) => state.categories;

export const getCategoriesItemsSelector = (state: RootState) =>
  getCategoryStateSelector(state).items;

export const getCategoriesHashMapByIdSelector = (state: RootState) => {
  const categories = getCategoriesItemsSelector(state);

  return keyBy(categories, 'id');
};
