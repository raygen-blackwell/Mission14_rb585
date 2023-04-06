import React from 'react';
import { Link } from 'react-router-dom';
// Nav.tsx is how the navigation is displayed
function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        &nbsp;&nbsp;
        <Link to="/" className="btn btn-secondary rounded-pill px-3">
          Home
        </Link>
        &nbsp;&nbsp;
        <Link to="/Movies" className="btn btn-secondary rounded-pill px-3">
          Movies
        </Link>
        &nbsp;&nbsp;
        <Link to="/Podcasts" className="btn btn-secondary rounded-pill px-3">
          Podcats
        </Link>
        &nbsp;&nbsp;
      </nav>
    </div>
  );
}
export default NavBar;
