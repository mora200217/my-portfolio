// src/components/Navbar.tsx
import React from 'react';
import './Navbar.css';
import Logo from "../../../public/media/brand-white.svg"

const Navbar: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">
          <a href="/">
          <svg width="138" height="93" viewBox="0 0 138 93" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="isotipo">
            <g id="Vector">
            <path d="M81.2049 16.6528C74.0716 -7.88126 53.6589 11.6512 44.1054 24.4184L28.1318 47.9648L28.1268 47.9623L27.1339 49.4357L25.8204 51.3719L25.827 51.3751L0 89.7021C24.7047 94.4039 42.3765 75.6665 49.8951 63.0258L60.6957 46.3241L69.5815 74.4024L72.1982 82.8797C79.8729 79.4682 88.6171 77.5371 97.8963 77.5371C98.1206 77.5371 98.3446 77.5383 98.5682 77.5405L81.2049 16.6528Z" fill="white"/>
            <path d="M106.872 78.1495C119.05 79.829 129.887 84.8697 138 92.1049L116.24 13.4976L116.245 13.4966C110.79 -5.63627 98.3905 -1.26302 87.681 8.06953L106.872 78.1495Z" fill="white"/>
            </g>
            </g>
          </svg>

          </a>
        </h1>
        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/research">Research</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className="navbar-toggler"></span>
          <span className="navbar-toggler"></span>
          <span className="navbar-toggler"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
