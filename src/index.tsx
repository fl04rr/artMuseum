import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';

import { RouterProvider } from 'react-router-dom';
import { theme } from './utils/styles/theme';
import { FavoriteProvider } from './utils/FavoriteProvider';
import { AppRouter } from './AppRouter';
import { GlobalStyles } from './utils/styles/GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <FavoriteProvider>
        <GlobalStyles />
        <RouterProvider router={AppRouter} />
      </FavoriteProvider>
    </ThemeProvider>
  </React.StrictMode>,
);

reportWebVitals();
