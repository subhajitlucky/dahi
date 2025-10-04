import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Layout.css';

const Layout = ({ children }) => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <Link to="/" className="logo">
            <h1>Super Dahi</h1>
          </Link>
          <nav className="nav">
            <ul>
              <li><Link to="/" className={isActive('/')}>Home</Link></li>
              <li><Link to="/recipe" className={isActive('/recipe')}>Recipe</Link></li>
              <li><Link to="/science" className={isActive('/science')}>Science</Link></li>
              <li><Link to="/traditional" className={isActive('/traditional')}>Traditional Methods</Link></li>
              <li><Link to="/tips" className={isActive('/tips')}>Storage Tips</Link></li>
              <li><Link to="/community" className={isActive('/community')}>Community</Link></li>
              <li><Link to="/research" className={isActive('/research')}>Research</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="main-content">
        <div className="container">
          {children}
        </div>
      </main>
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Super Dahi - Promoting Gut Health Through Traditional Fermentation</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;