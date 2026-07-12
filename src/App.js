import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import store from './redux/store';
import WelcomeScreen from './screens/WelcomeScreen';
import Home from './screens/Home';
import Navbar from './screens/Navbar';
import About from './screens/About';
import Experience from './screens/Experience';
import Projects from './screens/Projects';
import Contact from './screens/contact';
import Skills from './screens/skills';
import './css/theme.css';
import './css/App.css';

function AppWrapper() {
  return (
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
}

function App() {
  const theme = useSelector((state) => state.theme.theme);
  const location = useLocation();

  return (
    <div className="site" data-theme={theme}>
      {location.pathname !== '/' && <Navbar />}

      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </div>
  );
}

export default AppWrapper;
