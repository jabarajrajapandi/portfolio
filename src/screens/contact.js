import React, { useState } from 'react';
import '../css/contact.css';
import CallIcon from '@mui/icons-material/Call';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Contact() {
  const [showMailID, setShowMailID] = useState(false);
  const email = 'jabarajrajapandi@gmail.com';
  const phone = '8220317251';

  const handleCopyMail = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(email).then(
      () => alert('Email ID copied to clipboard!'),
      (err) => alert('Failed to copy email ID: ' + err)
    );
  };

  return (
    <section className="section contact-section">
      <div className="section-head">
        <h2>Contact</h2>
        <span className="section-index mono">MODULE_05</span>
      </div>

      <p className="contact-lede">
        Open to full-stack and mobile roles in the 12–24 LPA range. Reach out directly —
        I usually reply within a day.
      </p>

      <div className="contact-grid">
        <div className="contact-row panel" onClick={() => (window.location.href = `tel:${phone}`)}>
          <CallIcon />
          <span>{phone}</span>
        </div>

        <div className="contact-row panel" onClick={() => setShowMailID((p) => !p)}>
          <AlternateEmailIcon />
          <span>{showMailID ? email : 'Email'}</span>
          {showMailID && (
            <ContentCopyIcon className="copy-icon" onClick={handleCopyMail} />
          )}
        </div>

        <a className="contact-row panel" href="https://www.linkedin.com/in/jabaraj-r-846029289/" target="_blank" rel="noreferrer">
          <LinkedInIcon />
          <span>LinkedIn</span>
        </a>

        <a className="contact-row panel" href="https://github.com/jabarajrajapandi" target="_blank" rel="noreferrer">
          <GitHubIcon />
          <span>GitHub</span>
        </a>
      </div>
    </section>
  );
}
