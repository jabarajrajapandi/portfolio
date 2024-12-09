import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from './redux/store';
import { toggleTheme } from './redux/themeSlice';
import WelcomeScreen from './screens/WelcomeScreen';
import Home from './screens/Home';
import Navbar from './screens/Navbar';
import './css/App.css';
import Contact from './screens/contact';

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
  const dispatch = useDispatch();

  const appStyles = {
    backgroundColor: theme === 'light' ? '#ffffff' : '#1e1e1e',
    color: theme === 'light' ? '#000000' : '#ffffff',
    // paddingLeft: '10vh',
    // paddingRight: '2vh',
    // paddingTop: '10.5vh',
  };

  const location = useLocation(); 

  return (
    <div style={appStyles}>
      {location.pathname !== '/' && <Navbar />}

      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/Home" />} />
      </Routes>
    </div>
  );
}

export default AppWrapper;
