//import for FE export for backend
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
      <div className="container">
        <Link className="navbar-brand" to="/">
          🍹 BarCart 🛒
        </Link>

        <div className="btn-group">
          <Link className="btn btn-primary me-4 text-white" to="/fridge">
            Fridge
          </Link>
          <Link className="btn btn-success " to="/filter">
            Filter
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
