
import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SearchCourse from './pages/SearchCourse';
import Login from './pages/Login';
import Portal from './pages/Portal';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-course" element={<SearchCourse />} />
        <Route path="/login" element={<Login />} />
        <Route path="/portal" element={<Portal />} />
      
      </Routes>
    </Router>
  );
};

export default App;