import React from 'react';
import './about.css';
import aboutPortrait from '../assets/img2.jpg';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-grid">
        <div className="about-portrait">
          <img src={aboutPortrait} alt="Eliud Mkuras" />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I am a motivated Computer Science graduate from the University of Dar es Salaam
            (College of ICT) with hands-on experience across software development, web
            technologies, databases, networking and IT support.
          </p>
          <p>
            Through practical training at Infosys and TTCL and freelance work, I have built and
            supported software systems, configured networks and delivered IT solutions. I am now
            seeking a <strong>Junior Software Developer</strong>, <strong>Web Developer</strong>,{' '}
            <strong>Backend Developer</strong> or <strong>Graduate Software Engineering</strong>{' '}
            opportunity.
          </p>

          <div className="about-facts">
            <div className="fact">
              <span className="fact-icon">📍</span>
              <div>
                <strong>Location</strong>
                <span>Dar es Salaam, Tanzania</span>
              </div>
            </div>
            <div className="fact">
              <span className="fact-icon">✉️</span>
              <div>
                <strong>Email</strong>
                <span>eliudevelian@gmail.com</span>
              </div>
            </div>
            <div className="fact">
              <span className="fact-icon">📞</span>
              <div>
                <strong>Phone</strong>
                <span>+255 687 987 943 / +0613 318 263</span>
              </div>
            </div>
            <div className="fact">
              <span className="fact-icon">💻</span>
              <div>
                <strong>GitHub</strong>
                <span>github.com/MKURAS-web</span>
              </div>
            </div>
            <div className="fact">
              <span className="fact-icon">🌍</span>
              <div>
                <strong>Languages</strong>
                <span>Swahili (Native) · English (Professional)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
