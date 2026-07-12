import React from 'react';
import '../css/About.css';

const FACTS = [
  { k: 'Experience', v: '3y 10m full-time (4.5y incl. internship)' },
  { k: 'Based in', v: 'Coimbatore, Tamil Nadu, India' },
  { k: 'Focus', v: 'Full-stack web + React Native mobile' },
  { k: 'Currently at', v: 'Cantier Systems Pvt Ltd (MES 4.0)' },
];

const EDUCATION = [
  { degree: 'B.Sc. Information Technology', school: 'Bharathidasan University, Coimbatore', period: '2023 – 2026' },
  { degree: 'Diploma in Production Engineering', school: 'Government Polytechnic College, Coimbatore', period: 'Aug 2012 – May 2014' },
];

export default function About() {
  return (
    <section className="section">
      <div className="section-head">
        <h2>About</h2>
        <span className="section-index mono">MODULE_01</span>
      </div>

      <p className="about-summary">
        Software developer with close to four years of full-time professional
        experience building scalable web and mobile applications for product-based
        and enterprise clients. Comfortable across the stack — React.js, React Native,
        TypeScript, and Redux Toolkit on the front end; Node.js/Express.js, with working
        knowledge of ASP.NET Clean Architecture, on the back end. I've shipped
        real-time shop-floor monitoring dashboards, IoT-driven predictive maintenance
        features, and consumer-facing voucher and payments apps — and I care about
        writing code that stays maintainable long after the sprint ends.
      </p>

      <div className="about-grid">
        {FACTS.map((f) => (
          <div className="fact panel" key={f.k}>
            <div className="fact-k mono">{f.k}</div>
            <div className="fact-v">{f.v}</div>
          </div>
        ))}
      </div>

      <div className="about-education">
        <div className="eyebrow"><span className="status-dot" />EDUCATION</div>
        {EDUCATION.map((e) => (
          <div className="edu-row" key={e.degree}>
            <div>
              <div className="edu-degree">{e.degree}</div>
              <div className="edu-school">{e.school}</div>
            </div>
            <div className="edu-period mono">{e.period}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
