import React, { useState } from 'react';
import './contact.css';
import ctaBg from '../assets/img3.jpg';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:eliudevelian@gmail.com?subject=${subject}&body=${body}`;
  };

  const updateField = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have a project, opportunity or collaboration in mind? I would love to hear from you.
        </p>

        <div className="contact-grid">
          <div className="contact-info-card">
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <div>
                <strong>Email</strong>
                <span>eliudevelian@gmail.com</span>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div>
                <strong>WhatsApp</strong>
                <span>+255 687 987 943</span>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📱</span>
              <div>
                <strong>Call</strong>
                <span>+0613 318 263</span>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div>
                <strong>Location</strong>
                <span>Dar es Salaam, Tanzania</span>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">💻</span>
              <div>
                <strong>GitHub</strong>
                <span>github.com/MKURAS-web</span>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={updateField}
                placeholder="Your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={updateField}
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={updateField}
                placeholder="Tell me about your project..."
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>

        <div className="cta-band">
          <div className="cta-band-bg" aria-hidden="true" />
          <h2>Ready to build something great?</h2>
          <p>
            I am currently open to Junior Software Developer, Web Developer, Backend Developer or
            Graduate Software Engineering opportunities.
          </p>
          <a href="#contact" className="btn btn-primary">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
