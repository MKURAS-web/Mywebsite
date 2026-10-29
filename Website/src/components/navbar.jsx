import React, { useState } from 'react';
import './navbar.css';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const isDark = theme !== 'light';

  const closeMenu = () => setOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button
          type="button"
          className="nav-logo"
          onClick={onToggleTheme}
          aria-label="Toggle dark and light mode"
        >
          <span className="nav-logo-icon">{isDark ? '🌙' : '☀️'}</span>
          EM<span>.</span>
        </button>

        <button
          className={open ? 'hamburger open' : 'hamburger'}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={open ? 'nav-links open' : 'nav-links'}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="nav-cta-link" onClick={closeMenu}>
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
