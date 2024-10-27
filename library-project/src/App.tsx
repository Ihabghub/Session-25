// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />  {/* Set LoginPage as the default route */}
        <Route path="/main" element={<MainPage />} />  {/* Change path to /main for MainPage */}
      </Routes>
    </Router>
  );
};

export default App;
