import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';
import ReactGA from 'react-ga4';
import config from './config'; // Import your config file

import Microblog from './pages/Microblog';
import Instalinks from './pages/Instalinks';

// Importing the i18n configuration and useTranslation hook
import { useTranslation } from 'react-i18next';
import './i18n'; // Assuming you have an i18n.js file set up as per the previous instructions

const App = () => {
  const { i18n, t } = useTranslation(); // Initializing translation

  useEffect(() => {
    const { measurementId } = config.googleAnalytics;
    if (measurementId) {
      ReactGA.initialize(measurementId);
      ReactGA.send('pageview');
    } else {
      console.warn('Google Analytics Measurement ID is not set');
    }
  }, []);

  // Function to change the language
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Router>
      <div>
        {/* Language Switcher Buttons */}
        <div style={{ marginBottom: '20px' }}>
          <button onClick={() => changeLanguage('en')}>English</button>
          <button onClick={() => changeLanguage('pt')}>Português</button>
        </div>

        <Routes>
          <Route path="/" element={<Microblog />} />
          <Route path="/instalinks" element={<Instalinks />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;