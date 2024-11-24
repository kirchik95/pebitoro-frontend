import { RootState } from '@core/redux/store';

const authStateSelector = (state: RootState) => state.auth;

export const getIsAuthenticatedSelector = (state: RootState) =>
  authStateSelector(state).isAuthenticated;