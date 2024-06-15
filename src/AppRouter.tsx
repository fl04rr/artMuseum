import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import MainPage from './pages/MainPage';
import ArtPage from './pages/ArtPage';
import FavoritesPage from './pages/FavoritesPage';
import CustomError from './components/CustomError';

export const AppRouter = createBrowserRouter([
  {
    element: <App />,
    errorElement: <CustomError title="Something went wrong" />,
    children: [
      { path: '/', element: <MainPage /> },
      { path: 'art/:id', element: <ArtPage /> },
      { path: '/favorites', element: <FavoritesPage /> },
    ],
  },
]);
