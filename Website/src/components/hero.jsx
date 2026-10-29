import React from 'react';
import './hero.css';
import heroPortrait from '../assets/picture.jpeg';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-badge">Computer Scientist · Software Developer</span>
          <h1 className="hero-title">Eliud Mkuras</h1>
          <p className="hero-tagline">Building smart software for real world problems.</p>
          <p className="hero-description">
            Computer Science graduate from the University of Dar es Salaam with hands-on
            experience in software development, web technologies, databases, networking and IT
            support. Skilled in PHP, JavaScript, React, Laravel, Java and MySQL, with a passion
            for building reliable digital products.
          </p>
          <div className="hero-ctas">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-outline">
              Get In Touch
            </a>
          </div>
        </div>
        <div className="hero-portrait">
          <img src={heroPortrait} alt="Eliud Mkuras" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
