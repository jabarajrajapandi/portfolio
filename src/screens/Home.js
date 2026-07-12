import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Home.css';

const CAREER_START = new Date('2022-04-01');

function yearsSince(date) {
  const diffMs = Date.now() - date.getTime();
  return (diffMs / (1000 * 60 * 60 * 24 * 365.25)).toFixed(1);
}

const STATS = [
  { label: 'Years shipping production code', value: `${yearsSince(CAREER_START)}+` },
  { label: 'Manufacturing clients served', value: '6+' },
  { label: 'Apps shipped to Play Store', value: '4+' },
  { label: 'Web UI perf. improvement', value: '35%' },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="eyebrow">
          <span className="status-dot" />
          AVAILABLE FOR NEW ROLES
        </div>

        <h1 className="hero-title">
          Jabaraj R
        </h1>
        <p className="hero-role mono">Software Developer — Full-Stack &amp; Mobile</p>

        <p className="hero-summary">
          I build real-time web and mobile products — currently shop-floor monitoring
          and predictive-maintenance dashboards for a Manufacturing Execution System
          used by automotive, semiconductor, and aerospace plants. React, React Native,
          TypeScript and Node.js on the front lines; ASP.NET Clean Architecture and
          SQL Server behind them.
        </p>

        <div className="hero-actions">
          <button className="btn btn-solid" onClick={() => navigate('/projects')}>
            View projects →
          </button>
          <button className="btn" onClick={() => navigate('/contact')}>
            Get in touch
          </button>
          <a className="btn" href="/resume.pdf" target="_blank" rel="noreferrer">
            Download resume
          </a>
        </div>

        <div className="hero-console panel">
          <div className="console-head mono">
            <span>console.log</span>
            <span className="console-dots">
              <i /><i /><i />
            </span>
          </div>
          <div className="console-body mono">
            <p><span className="console-key">location</span> "Coimbatore, Tamil Nadu, India"</p>
            <p><span className="console-key">stack</span> ["React", "React Native", "Node.js", "ASP.NET", "SQL Server"]</p>
            <p><span className="console-key">currently</span> "Building MES 4.0 @ Cantier Systems"</p>
            <p><span className="console-key">status</span> <span className="console-ok">200 OK — open to new opportunities`</span></p>
          </div>
        </div>

        <div className="hero-stats">
          {STATS.map((s) => (
            <div className="stat panel" key={s.label}>
              <div className="stat-value mono">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
