// AppRouter.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/login/login';
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/inicio" element={<Home />} />
        <Route path="/login" element={<Login />} />
     

        
      </Routes>
    </Router>
  );
};

export default AppRouter;
