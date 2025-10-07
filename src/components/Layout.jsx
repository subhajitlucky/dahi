import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Layout.css';

const NAV_ITEMS = [
  { path: '/', label: 'Home' },
  { path: '/recipe', label: 'Recipe' },
  { path: '/science', label: 'Science' },
  { path: '/traditional', label: 'Traditional Methods' },
  { path: '/tips', label: 'Storage Tips' },
  { path: '/community', label: 'Community' },
  { path: '/research', label: 'Research' },
];

const Layout = ({ children }) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app">
      <header className="site-header">
        <div className="site-header__inner container">
          <Link to="/" className="brand" onClick={closeMenu}>
            <span className="brand__title">Super Dahi</span>
            <span className="brand__tagline">Heritage fermentation, modern living</span>
          </Link>

          <button
            type="button"
            className="nav-toggle"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className="nav-toggle__icon" aria-hidden="true" />
            <span className="sr-only">Toggle navigation</span>
          </button>

          <nav className={`primary-nav ${menuOpen ? 'primary-nav--open' : ''}`}>
            <ul>
              {NAV_ITEMS.map(({ path, label }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className={location.pathname === path ? 'is-active' : ''}
                    onClick={closeMenu}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="main-content">
        <div className="container">{children}</div>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Super Dahi · Cultured nourishment for modern life.</p>
          <p className="footer-note">Designed for curious fermenters and wellness seekers.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;