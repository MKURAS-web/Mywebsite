import React from 'react';
import './experience.css';

const experiences = [
  {
    date: '2026',
    title: 'Software Development & Testing',
    org: 'MsimTech · Imagine Company Limited',
    location: 'Sky City, near Mlimani City',
    description:
      'Participated in software development and testing activities, contributed to building the company website (jawtets.com) and the company brochure, and completed the final year project on Access Control.',
    points: [
      'Participated in software testing at MsimTech.',
      'Developed the company website such as jawtets.com and the company brochure.',
      'Completed the final year project titled “Reintroducing Smartness in University ID Card using Access Control System”.',
    ],
  },
  {
    date: '2025 – 2026',
    title: 'Freelance Computer Technician',
    org: 'University of Dar es Salaam Campus',
    location: 'Dar es Salaam, Tanzania',
    description:
      'Provided computer maintenance, troubleshooting and repair services to fellow students while studying.',
    points: [
      'Performed computer maintenance, diagnostics and troubleshooting for client systems.',
      'Performed Windows OS installation and software configuration.',
      'Diagnosed and resolved various hardware and software issues.',
      'Provided basic web development support when required.',
    ],
  },
  {
    date: '2023 – 2026',
    title: 'IT Practical Training: Computer Maintenance & Networking',
    org: 'Infosys (T) IPS Ltd',
    location: 'Dar es Salaam, Tanzania',
    description:
      'Practical IT training focused on computer maintenance and networking support.',
    points: [
      'Performed computer maintenance, diagnostics and troubleshooting for client systems.',
      'Assisted in network setup, configuration and maintenance activities.',
      'Gained hands-on experience with hardware and software installation and repair.',
    ],
  },
  {
    date: 'Fiber & Network Infrastructure Training',
    title: 'IT Practical Training: Fiber & Network Infrastructure',
    org: 'Tanzania Telecommunications (TTCL)',
    location: 'Kagera Region',
    description:
      'Practical training in fiber optic cable installation and network infrastructure support.',
    points: [
      'Participated in fiber optic cable installation and splicing.',
      'Assisted in LAN design, setup and configuration.',
      'Supported network maintenance and troubleshooting tasks.',
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience &amp; Training</h2>
        <p className="section-subtitle">
          Practical training, freelance engineering and professional development that shaped my
          technical foundation.
        </p>
        <div className="timeline">
          {experiences.map((item) => (
            <div className="timeline-item" key={item.title}>
              <span className="timeline-date">{item.date}</span>
              <h3>{item.title}</h3>
              <p className="timeline-org">
                {item.org} <span>· {item.location}</span>
              </p>
              <p className="timeline-desc">{item.description}</p>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
