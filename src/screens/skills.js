import React from 'react';
import '../css/skills.css';

const GROUPS = [
  {
    title: 'Front-End',
    items: ['React.js', 'React Native', 'TypeScript', 'JavaScript', 'Redux Toolkit', 'Micro Frontend Architecture', 'Material UI', 'Fluent UI', 'Bootstrap', 'SASS', 'CSS', 'HTML'],
  },
  {
    title: 'Back-End',
    items: ['Node.js', 'Express.js', 'ASP.NET (Clean Architecture)'],
  },
  {
    title: 'Databases',
    items: ['SQL Server (SSMS)', 'MySQL', 'Firebase'],
  },
  {
    title: 'Architecture',
    items: ['Clean Architecture', 'MVVM', 'MVC', 'Micro Frontend Architecture'],
  },
  {
    title: 'API & Auth',
    items: ['RESTful APIs', 'JWT', 'OAuth 2.0'],
  },
  {
    title: 'Cloud & DevOps',
    items: ['Google Cloud (OAuth)', 'Azure DevOps (Boards & CI/CD)', 'IIS', 'Git / GitHub'],
  },
  {
    title: 'Mobile & Platforms',
    items: ['Android Studio', 'Gradle', 'Web', 'Android', 'Windows', 'Linux'],
  },
];

export default function Skills() {
  return (
    <section className="section">
      <div className="section-head">
        <h2>Skills</h2>
        <span className="section-index mono">MODULE_04</span>
      </div>

      <div className="skills-grid">
        {GROUPS.map((g) => (
          <div className="skill-module panel" key={g.title}>
            <div className="skill-module-head">
              <span className="status-dot" />
              <span className="mono">{g.title}</span>
            </div>
            <div className="skill-tags">
              {g.items.map((item) => (
                <span className="skill-tag" key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
