import React from 'react';
import './projects.css';

const projects = [
  {
    badge: 'Final Year Project',
    title: 'Smartness in University ID Card',
    description:
      'Reintroducing smartness in the University ID Card using an Access Control System to monitor who can get access to a certain room.',
    tags: ['Final Year Project', 'Access Control', 'Security'],
  },
  {
    badge: 'Web Development',
    title: 'Jawtets.com',
    description:
      'Developed the company website, jawtets.com, and contributed to the software development and delivery of the live web platform.',
    tags: ['Web Development', 'Live Website'],
    link: 'https://jawtets.com',
  },
  {
    badge: 'Testing & Delivery',
    title: 'Company Brochure',
    description:
      'Participated in software testing and the development of the company brochure, later deployed on Vercel.',
    tags: ['Testing', 'Vercel'],
    link: 'https://srks.vercel.app/',
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A selection of academic, professional and freelance work that reflects my hands-on
          engineering journey.
        </p>
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.title}>
              <span className="project-badge">{project.badge}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span className="project-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  className="project-link"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Project →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
