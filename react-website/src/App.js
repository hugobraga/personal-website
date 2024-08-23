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

const App = () => {
  useEffect(() => {
    const { measurementId } = config.googleAnalytics;
    if (measurementId) {
      ReactGA.initialize(measurementId);
      ReactGA.send('pageview');
    } else {
      console.warn('Google Analytics Measurement ID is not set');
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Microblog />} />
        <Route path="/instalinks" element={<Instalinks />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;