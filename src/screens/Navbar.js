import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/themeSlice';
import '../css/Navbar.css';

const NAV_ITEMS = [
  { label: 'Home', path: '/home' },
  { label: 'About', path: '/about' },
  { label: 'Experience', path: '/experience' },
  { label: 'Projects', path: '/projects' },
  { label: 'Skills', path: '/skills' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const themeMode = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <header className="nav">
      <div className="nav-inner">
        <button className="nav-brand" onClick={() => go('/home')}>
          <span className="status-dot" />
          <span className="nav-brand-text mono">JABARAJ_R</span>
        </button>

        <nav className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.path}
              className={`nav-link mono ${location.pathname === item.path ? 'nav-link-active' : ''}`}
              onClick={() => go(item.path)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="nav-actions">
          <button className="theme-toggle" onClick={() => dispatch(toggleTheme())} aria-label="Toggle theme">
            {themeMode === 'light' ? '🌙' : '☀️'}
          </button>
          <button className="nav-burger" onClick={() => setMenuOpen((p) => !p)} aria-label="Menu">
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  );
}
