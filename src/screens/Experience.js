import React from 'react';
import '../css/Experience.css';

const JOBS = [
  {
    role: 'Software Developer',
    company: 'Cantier Systems Pvt Ltd',
    period: 'May 2025 — Present',
    tag: 'ACTIVE',
    blurb:
      'AI-powered Manufacturing Execution System (Cantier MES 4.0) for automotive, semiconductor, electronics, aerospace, and F&B plants.',
    points: [
      'Built enterprise MES web modules in React.js, TypeScript, and Redux Toolkit for real-time shop-floor monitoring and manufacturing intelligence dashboards.',
      'Built and maintained the React Native app for client MRF (Android), enabling real-time production tracking, with iOS builds via CI/CD.',
      'Contributed to ASP.NET backend services following Clean Architecture principles.',
      'Rolled out Micro Frontend Architecture so client teams could ship modular UI features independently.',
      'Deployed and managed apps on IIS; handled SQL Server (SSMS) schema design, queries, and optimization.',
      'Delivered features for SMT, MRF, Sona Comstar, Lumax, Aequs, and Brakes India.',
      'Contributed to Industrial IoT / machine-condition monitoring for predictive maintenance and OEE tracking.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'SparkDial Online Services Pvt Ltd',
    period: 'April 2022 — May 2025',
    tag: 'COMPLETE',
    blurb: 'Product company behind Spark Redeem, a voucher and payback platform across mobile and web.',
    points: [
      'Built React Native apps with MVVM architecture — Android primary, collaborating on iOS releases.',
      'Shipped responsive React.js web UIs, lifting user engagement 35%.',
      'Designed RESTful APIs in Node.js/Express.js, improving backend performance 20%.',
      'Integrated Firebase for real-time sync, push notifications, and auth; secured sessions with JWT.',
      'Cut app load times 30% through targeted performance work.',
      'Shipped to the Play Store; supported the team on App Store submissions and compliance.',
    ],
  },
];

export default function Experience() {
  return (
    <section className="section">
      <div className="section-head">
        <h2>Experience</h2>
        <span className="section-index mono">MODULE_02</span>
      </div>

      <div className="log">
        {JOBS.map((job) => (
          <div className="log-entry panel" key={job.company}>
            <div className="log-entry-head">
              <div>
                <div className="log-role">{job.role}</div>
                <div className="log-company">{job.company}</div>
              </div>
              <div className="log-meta">
                <span className={`log-tag mono ${job.tag === 'ACTIVE' ? 'log-tag-active' : ''}`}>
                  {job.tag === 'ACTIVE' && <span className="status-dot" />}
                  {job.tag}
                </span>
                <span className="log-period mono">{job.period}</span>
              </div>
            </div>
            <p className="log-blurb">{job.blurb}</p>
            <ul className="log-points">
              {job.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
