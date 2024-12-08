import * as React from 'react';
import { createBrowserRouter } from 'react-router';

import App from '@core/App';

import { Signup } from '@pages/Auth/screens/Signup';

import { ProtectedRoutes } from './ProtectedRoutes';
import { PublicRoutes } from './PublicRoutes';

const Auth = React.lazy(() => import('@pages/Auth'));
const Home = React.lazy(() => import('@pages/Home'));
const Tasks = React.lazy(() => import('@pages/Tasks'));
const Settings = React.lazy(() => import('@pages/Settings'));

export const router = createBrowserRouter([
  {
    element: React.createElement(PublicRoutes),
    children: [
      {
        path: '/login',
        element: React.createElement(Auth),
      },
      {
        path: '/signup',
        element: React.createElement(Signup),
      },
    ],
  },
  {
    path: '/',
    element: React.createElement(App),
    children: [
      {
        element: React.createElement(ProtectedRoutes),
        children: [
          { path: '/', index: true, element: React.createElement(Home) },
          {
            path: '/tasks/*',
            element: React.createElement(Tasks),
          },
          {
            path: '/settings/*',
            element: React.createElement(Settings),
          },
        ],
      },
    ],
  },
]);
