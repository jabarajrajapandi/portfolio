import React from 'react';
import '../css/Projects.css';

const PROJECTS = [
  {
    name: 'Cantier MES 4.0',
    role: 'Manufacturing client solutions',
    stack: ['React.js', 'React Native', 'TypeScript', 'ASP.NET', 'Clean Architecture', 'Micro Frontend'],
    blurb:
      'AI-powered Manufacturing Execution System delivering real-time operational visibility, predictive maintenance, and shop-floor traceability for discrete and process manufacturing.',
    points: [
      'Web modules for SMT, Sona Comstar, Lumax, Aequs, and Brakes India built with Micro Frontend Architecture.',
      'React Native app for MRF for real-time production monitoring.',
      'Backend services in ASP.NET (Clean Architecture) with SQL Server.',
    ],
  },
  {
    name: 'Spark Redeem',
    role: 'Consumer voucher & payback app',
    stack: ['React Native', 'React.js', 'Node.js'],
    blurb: 'A payback application connecting customers and vendors — vendor discounts and voucher-based offers on every purchase.',
    points: [
      'Key modules: Newspaper, Auto Consulting, Real Estate, Live Meet Streaming, KwikPay.',
      'Cross-platform UI in React Native — 4.5/5 store rating.',
      'Scalable Node.js APIs with third-party library integrations.',
    ],
  },
  {
    name: 'Spark Redeem Web Panels',
    role: 'Admin & operations tooling',
    stack: ['React.js', 'Node.js', 'MySQL'],
    blurb: 'Web panels used to manage and control the Spark Redeem mobile app end to end.',
    points: [
      'Responsive Affiliate, Consultancy, ERP, Influencer, and Sub-Admin panels.',
      'Scalable Node.js backend architecture.',
      'JWT-secured authentication.',
    ],
  },
  {
    name: 'Growcher',
    role: 'Independent, end-to-end build',
    stack: ['React Native', 'React.js', 'Node.js'],
    blurb: 'A voucher-system app similar to Spark Redeem, designed and built solo — including the admin panel and APIs.',
    points: [
      'Built the voucher app, admin panel, and APIs independently.',
      'Integrated KwikPay for payment processing.',
      'Responsive React.js admin panel for app management.',
    ],
  },
  {
    name: 'I-Robo Chakra',
    role: 'Multi-role coaching platform',
    stack: ['React Native', 'React.js', 'Node.js', 'MySQL'],
    blurb: 'An app connecting institutes, franchises, admins, sub-admins, coaches, parents, and students.',
    points: [
      'Front-end components in React Native for a seamless UX across roles.',
      'Node.js backend with MySQL for data management.',
    ],
  },
];

export default function Projects() {
  return (
    <section className="section">
      <div className="section-head">
        <h2>Projects</h2>
        <span className="section-index mono">MODULE_03</span>
      </div>

      <div className="proj-grid">
        {PROJECTS.map((p) => (
          <div className="proj-card panel" key={p.name}>
            <div className="proj-head">
              <h3>{p.name}</h3>
              <span className="proj-role mono">{p.role}</span>
            </div>
            <p className="proj-blurb">{p.blurb}</p>
            <ul className="proj-points">
              {p.points.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
            <div className="proj-stack">
              {p.stack.map((s) => (
                <span className="chip mono" key={s}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
