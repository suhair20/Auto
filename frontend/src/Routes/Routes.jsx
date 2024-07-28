// routes.jsx
import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import App from '../App'
import UserRoutes from './UserRoutes'
import DriverRoutes from './DriverRoutes';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {UserRoutes}
      {DriverRoutes}
    </Route>
  )
);

export default router;
