import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import MainPage from './pages/MainPage';
import ArtPage from './pages/ArtPage';
import FavoritesPage from './pages/FavoritesPage';
import CustomError from './components/CustomError';
import { ROUTES } from './constants/constants';

export const AppRouter = createBrowserRouter([
  {
    element: <App />,
    errorElement: <CustomError title="Something went wrong" />,
    children: [
      { path: ROUTES.HOME, element: <MainPage /> },
      { path: ROUTES.ART, element: <ArtPage /> },
      { path: ROUTES.FAVORITES, element: <FavoritesPage /> },
    ],
  },
]);
