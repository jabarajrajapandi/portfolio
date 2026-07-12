import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import androidStudio from '../assets/AppIcons/androidStudio.png';
import bootstrap from '../assets/AppIcons/bootstrap.png';
import css from '../assets/AppIcons/css.png';
import git from '../assets/AppIcons/git.png';
import gradle from '../assets/AppIcons/gradle.png';
import html from '../assets/AppIcons/html.png';
import javascript from '../assets/AppIcons/javascript.png';
import mysql from '../assets/AppIcons/mysql.png';
import node from '../assets/AppIcons/node.png';
import react from '../assets/AppIcons/react.png';
import xcode from '../assets/AppIcons/xcode.png';

import '../css/Welcome.css';

const imageList = [androidStudio, gradle, xcode, react, node, mysql, git, javascript, bootstrap, css, html];

export default function WelcomeScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timer, setTimer] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageList.length);
    }, 900);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timer <= 0) {
      navigate('/home');
      return;
    }
    const t = setInterval(() => setTimer((p) => p - 1), 1000);
    return () => clearInterval(t);
  }, [timer, navigate]);

  return (
    <div className="boot-screen">
      <div className="boot-card panel">
        <div className="boot-icon">
          <img src={imageList[currentIndex]} alt="tech stack icon" />
        </div>
        <p className="eyebrow"><span className="status-dot" />BOOTING PORTFOLIO</p>
        <h1 className="boot-title">Jabaraj R</h1>
        <p className="boot-sub mono">loading modules… {timer}s</p>
        <button className="btn btn-solid" onClick={() => navigate('/home')}>
          Skip →
        </button>
      </div>
    </div>
  );
}
