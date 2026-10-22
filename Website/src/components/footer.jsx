import React from 'react';
import './footer.css';
import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkein.png';
import whatsapp from '../assets/whatsapp.png';
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <h2>Our Website</h2>
          <p>We create amazing digital experiences.</p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </div>

        <div>
          <h3>Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +255 700 000 000</p>
        </div>
      </div>

   <div className="footer-bottom">
  <div className="social-icons">
    <a href="#" aria-label="Facebook">
      <img src={facebook} alt="Facebook" className="image" />
    </a>

    <a href="#" aria-label="Twitter">
      <img src={twitter} alt="Twitter" className="image" />
    </a>

    <a href="#" aria-label="Instagram">
      <img src={instagram} alt="Instagram" className="image" />
    </a>

    <a href="#" aria-label="LinkedIn">
      <img src={linkedin} alt="LinkedIn" className="image" />
    </a>

    <a href="#" aria-label="WhatsApp">
      <img src={whatsapp} alt="WhatsApp" className="image" />
    </a>
  </div>

  <div>
    <p>© 2026 Our Website. All rights reserved.</p>
  </div>
</div>
    </footer>
  );
}

export default Footer;