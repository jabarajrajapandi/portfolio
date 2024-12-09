import React, { useState, useEffect } from 'react';
import { Button, Typography } from '@mui/material';
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

export default function WelcomeScreen() {
  const imageList = [
    androidStudio,
    gradle,
    xcode,
    react,
    node,
    mysql,
    git,
    javascript,
    bootstrap,
    css,
    html,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [timer, setTimer] = useState(15);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    }, 2000); 
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIsTimerActive(true);
  }, []);

  useEffect(() => {
    let interval;
    if (isTimerActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      window.location.href = '/home'; 
    }
    return () => clearInterval(interval);
  }, [isTimerActive, timer]);

  const handleGoButtonClick = () => {
    setTimer(0)
    setIsTimerActive(true);
    window.location.href = '/home';
  };


  return (
    <>
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12" id="container">
            <div className="animation-container">
              <img
                src={imageList[currentIndex]}
                alt="Animated Icon"
                className="animated-image"
              />
            </div>

            <div className="Button">
              <Typography className='my-5' variant="h5" gutterBottom>
                Countdown: {timer}
              </Typography>
              <button
                className="btn-grad"
                onClick={handleGoButtonClick}
              >
                Explore
              </button>
            </div>
        </div>
      </div>
    </div>
    </>
  );
}
