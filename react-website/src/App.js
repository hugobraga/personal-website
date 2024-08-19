import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';

import Microblog from './pages/Microblog';
import Instalinks from './pages/Instalinks';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Microblog />} />
        <Route path="/instalinks" element={<Instalinks />} />
        {/* <Route path="/instalinks3" element={<Instalinks3 />} /> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;