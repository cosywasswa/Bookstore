import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import PropTypes from 'prop-types';

function Navbar() {
  return (
    <nav className="navigation">
      <h1>Bookstore CMS</h1>
      <ul className="nav-list">
        <CustomLink className="books" to="/">BOOKS</CustomLink>
        <CustomLink className="category" to="/Categories">CATEGORIES</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({
  to, children, className,
}) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={`${isActive ? 'active' : ''} ${className}`}>
      <Link to={to}>
        {children}
      </Link>
    </li>
  );
}

CustomLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};

export default Navbar;
