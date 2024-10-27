import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import BookListPage from './pages/BookListPage';
import BookDetailsPage from './pages/BookDetailsPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/books" element={<BookListPage />} /> 
        <Route path="/books/:bookId" element={<BookDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
