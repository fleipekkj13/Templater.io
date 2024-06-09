// App.js
import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Login from './Pages/Login/login';
import HomePage from './Pages/Home/Home';
import ProtectedRoutes from './utils/ProtectedRoutes';
import Register from './Pages/Register/register';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path='/login'/>
        <Route element={<Register />} path='/register'></Route>
        <Route element={<ProtectedRoutes />}>
          <Route element={<HomePage />} path='/'/>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
