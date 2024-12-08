import { Navigate, Outlet } from 'react-router';

export const ProtectedRoutes = () => {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};
