// routes.jsx
import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import App from '../App'
import UserRoutes from './UserRoutes'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {UserRoutes}
    </Route>
  )
);

export default router;
