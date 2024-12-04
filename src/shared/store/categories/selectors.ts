import { RootState } from '@core/redux/store';

const getCategoryStateSelector = (state: RootState) => state.categories;

export const getCategoriesItemsSelector = (state: RootState) =>
  getCategoryStateSelector(state).items;
