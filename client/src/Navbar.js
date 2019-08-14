import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
    <Link className="navbar-brand" to="/">
      MERN-Stack Todo App
    </Link>
    <div className="collpase navbar-collapse">
      <ul className="navbar-nav mr-auto">
        <li className="navbar-item">
          <Link className="nav-link" to="/">
            Todos
          </Link>
        </li>
        <li className="navbar-item">
          <Link className="nav-link" to="/create">
            Create Todo
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
