// App.jsx
import React from 'react';
import Header from './Components/User/Header';
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const App = () => (
  <>
    <Header />
    <div className=" ">
      <Outlet />
    </div>
  </>
);

export default App;

