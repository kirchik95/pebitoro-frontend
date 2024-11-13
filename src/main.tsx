import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from '@core/App';

import '@fontsource/open-sans';
import '@fontsource-variable/inter';
import 'modern-normalize/modern-normalize.css';
import '@core/styles/variables.css';
import '@core/styles/main.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
