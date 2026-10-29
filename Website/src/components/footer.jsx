import React from 'react';
import './footer.css';
import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkein.png';
import whatsapp from '../assets/whatsapp.png';
import tiktok from '../assets/tiktok.png';
import utube from '../assets/utube.png';

function Footer() {
  const socials = [
    { name: 'Facebook', icon: facebook },
    { name: 'Twitter', icon: twitter },
    { name: 'Instagram', icon: instagram },
    { name: 'LinkedIn', icon: linkedin },
    { name: 'WhatsApp', icon: whatsapp },
    { name: 'TikTok', icon: tiktok },
    { name: 'YouTube', icon: utube },
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <a href="#home" className="nav-logo">
            EM<span>.</span>
          </a>
          <p>
            Computer Scientist &amp; software developer crafting smart web experiences and digital
            products.
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul className="footer-links">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Follow Me</h4>
          <div className="socials">
            {socials.map((social) => (
              <a key={social.name} href="#" className="social-btn" aria-label={social.name}>
                <img src={social.icon} alt={social.name} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Eliud Mkuras. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
