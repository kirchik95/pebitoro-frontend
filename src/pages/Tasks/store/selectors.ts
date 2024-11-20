import { RootState } from '@core/redux/store';

const getTasksStateSelector = (state: RootState) => state.tasks;

export const getTasksSelector = (state: RootState) => getTasksStateSelector(state).tasks;
