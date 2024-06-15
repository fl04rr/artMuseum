import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import InterRegular from './assets/fonts/Inter-Regular.woff2';
import InterMedium from './assets/fonts/Inter-Medium.woff2';
import InterBold from './assets/fonts/Inter-Bold.woff2';
import LexendDecaRegular from './assets/fonts/LexendDeca-Regular.woff2';
import LexendDecaMedium from './assets/fonts/LexendDeca-Medium.woff2';
import LexendDecaBold from './assets/fonts/LexendDeca-Bold.woff2';
import LexendDecaSemiBold from './assets/fonts/LexendDeca-SemiBold.woff2';
import LexendDecaLight from './assets/fonts/LexendDeca-Light.woff2';

import { RouterProvider } from 'react-router-dom';
import { theme } from './utils/theme';
import { FavoriteProvider } from './utils/FavoriteProvider';
import { AppRouter } from './AppRouter';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const GlobalStyles = createGlobalStyle`
  @font-face {
  font-family: 'Inter';
  font-weight: 400;
  font-style: normal;
  font-display: block;
  src: url(${InterRegular});
  src: url(${InterRegular}) format('woff2');
  }

  @font-face {
  font-family: 'Inter';
  font-weight: 500;
  font-style: normal;
  font-display: block;
  src: url(${InterMedium});
  src: url(${InterMedium}) format('woff2');
  }

  @font-face {
  font-family: 'Inter';
  font-weight: 700;
  font-style: normal;
  font-display: block;
  src: url(${InterBold});
  src: url(${InterBold}) format('woff2');
  }

  @font-face {
  font-family: 'Lexend Deca';
  font-weight: 400;
  font-style: normal;
  font-display: block;
  src: url(${LexendDecaRegular});
  src: url(${LexendDecaRegular}) format('woff2');
  }

  @font-face {
  font-family: 'Lexend Deca';
  font-weight: 500;
  font-style: normal;
  font-display: block;
  src: url(${LexendDecaMedium});
  src: url(${LexendDecaMedium}) format('woff2');
  }

  @font-face {
  font-family: 'Lexend Deca';
  font-weight: 700;
  font-style: normal;
  font-display: block;
  src: url(${LexendDecaBold});
  src: url(${LexendDecaBold}) format('woff2');
  }

  @font-face {
  font-family: 'Lexend Deca';
  font-weight: 300;
  font-style: normal;
  font-display: block;
  src: url(${LexendDecaLight});
  src: url(${LexendDecaLight}) format('woff2');
  }

  @font-face {
  font-family: 'Lexend Deca';
  font-weight: 600;
  font-style: normal;
  font-display: block;
  src: url(${LexendDecaSemiBold});
  src: url(${LexendDecaSemiBold}) format('woff2');
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-size: 8px;
    font-family: 'Inter', sans-serif;

    @media screen and (max-width: 1280px) {
      font-size: 7px;
    }

    @media screen and (max-width: 768px){
      font-size: 6px;
    }
    border: none;
  }

  body{
    background-color: #FAFAFA;
  }

  button{
    cursor: pointer;
    background-color: transparent;
  }

  ::-webkit-scrollbar {
  width: 0;
  height: 0;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: transparent;
}
`;

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
