import { Navigate, Outlet } from 'react-router';

export const PublicRoutes = () => {
  const token = localStorage.getItem('token');

  return token ? <Navigate to="/" replace /> : <Outlet />;
};
