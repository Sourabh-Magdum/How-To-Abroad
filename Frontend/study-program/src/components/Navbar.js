import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/search-course">Search Course</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/portal">Portal</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;