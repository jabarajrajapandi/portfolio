import React, { useState } from 'react';
import '../css/contact.css';
import Logo from '../assets/images/logo.jpeg';
import CallIcon from '@mui/icons-material/Call';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


export default function Contact() {
  const [showMailID, setShowMailID] = useState(false);

  const handleShowMail = () => {
    setShowMailID((prev) => !prev); // Fixed the toggle functionality
  };

  const handleCopyMail = () => {
    const email = 'jabarajrajapandi@gmail.com';
    navigator.clipboard.writeText(email).then(
      () => {
        alert('Email ID copied to clipboard!');
      },
      (err) => {
        alert('Failed to copy email ID: ' + err);
      }
    );
  };


  const handleOpenLinkedIn = () => {
    window.open('https://www.linkedin.com/in/jabaraj-r-846029289/', '_blank');
  };

  const handleOpenGit = () => {
    window.open('https://github.com/jabarajrajapandi', '_blank');
  };


  return (
    <div className="container-fluid">
      <div className="row" style={{ paddingTop: '8vh' }}>
        <div className="col-lg-12" id="container">
          <img src={Logo} alt="" className="contactImage" />
          <div
            className="callButton"
            onClick={() => window.location.href = 'tel:8220317251'}
            style={{ cursor: 'pointer' }}
          >
            <CallIcon className="callIcon" />
            <p className="textValue">8220317251</p>
          </div>

          <div className='socialIconRow'>
            <div
              className="mailButton"
              onClick={handleShowMail}
              style={{ cursor: 'pointer' }}
            >
              <AlternateEmailIcon className="mailIcon" />
              {showMailID && (
                <>
                  <p className="textValueEmail">jabarajrajapandi@gmail.com</p>
                  <ContentCopyIcon
                    className="copyIcon"
                    onClick={handleCopyMail}
                    style={{ cursor: 'pointer', marginLeft: '8px' }}
                  />
                </>
              )}
            </div>


            <div
              className="mailButton"
              onClick={handleOpenLinkedIn}
              style={{ cursor: 'pointer' }}
            >
              <LinkedInIcon />
            </div>

            <div
              className="mailButton"
              onClick={handleOpenGit}
              style={{ cursor: 'pointer' }}
            >
              <GitHubIcon />
            </div>



          </div>
        </div>
      </div>
    </div>
  );
}
