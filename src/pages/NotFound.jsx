import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFound.css';

const NotFound = () => {
  return (
    <div className="page not-found-page">
      <div className="not-found-content">
        <div className="not-found-icon">🏺</div>
        <h1>404</h1>
        <h2>Culture not found</h2>
        <p>
          The fermentation path you're seeking seems to have wandered off.
          Perhaps it needs more time to develop, or maybe it was never meant to be.
        </p>
        <p className="not-found-wisdom">
          <em>"In the art of fermentation, patience reveals what haste conceals."</em>
        </p>
        <div className="not-found-actions">
          <Link to="/" className="btn btn--primary">
            Return to home
          </Link>
          <Link to="/recipe" className="btn btn--ghost">
            Start brewing
          </Link>
        </div>
        <div className="not-found-suggestions">
          <h3>Explore our fermentation guides</h3>
          <ul>
            <li><Link to="/recipe">Complete Recipe Guide</Link></li>
            <li><Link to="/science">Microbiome Science</Link></li>
            <li><Link to="/traditional">Traditional Methods</Link></li>
            <li><Link to="/tips">Storage Tips</Link></li>
            <li><Link to="/community">Community Stories</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
