import React from 'react';
import './skills.css';

const skillGroups = [
  {
    title: '💻 Programming Languages',
    skills: ['Java', 'C', 'PHP', 'JavaScript'],
  },
  {
    title: '🌐 Web Development',
    skills: ['HTML', 'CSS', 'React', 'Laravel'],
  },
  {
    title: '🗄️ Databases',
    skills: ['MySQL'],
  },
  {
    title: '⚙️ Software Engineering & IT',
    skills: [
      'System Analysis & Design',
      'Software Project Management',
      'System Security',
      'Troubleshooting',
      'Computer Maintenance & Repair',
      'Windows Setup',
      'LAN Configuration',
      'Network Troubleshooting',
    ],
  },
  {
    title: '🎨 Design & AI',
    skills: ['UI/UX Design', 'Graphics Design', 'Machine Learning & AI'],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">
          A practical toolkit built through formal education and hands-on engineering, IT and
          design experience.
        </p>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
