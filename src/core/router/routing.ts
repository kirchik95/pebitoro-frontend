import * as React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import App from '@core/App';

import { ProtectedRoutes } from './ProtectedRoutes';

const Auth = React.lazy(() => import('@pages/Auth'));
const Home = React.lazy(() => import('@pages/Home'));
const Tasks = React.lazy(() => import('@pages/Tasks'));

export const router = createBrowserRouter(
  [
    { path: '/auth', element: React.createElement(Auth) },
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
          ],
        },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
    },
  },
);
