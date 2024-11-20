import * as React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import App from '@core/App';

import Home from '@pages/Home';

const Tasks = React.lazy(() => import('@pages/Tasks'));

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: React.createElement(App),
      children: [
        { path: '/', index: true, element: React.createElement(Home) },
        {
          path: '/tasks/*',
          element: React.createElement(Tasks),
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
