import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router';

import { store } from '@core/redux/store';
import { router } from '@core/router/routing';

// @ts-expect-error:next-line
import '@fontsource-variable/inter';
import 'modern-normalize/modern-normalize.css';
import '@core/styles/variables.css';
import '@core/styles/main.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
