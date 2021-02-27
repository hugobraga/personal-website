// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Microblog from './pages/Microblog';
// import Instalinks1 from './pages/Instalinks1';
// import Instalinks2 from './pages/Instalinks2';
// import Instalinks3 from './pages/Instalinks3';
// import Instalinks4 from './pages/Instalinks4';
// import Instalinks5 from './pages/Instalinks5';
// import NewPlace from './places/pages/NewPlace';
import Instalinks from './pages/Instalinks';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Microblog />
        </Route>
        <Route path="/instalinks" exact>
          <Instalinks />
        </Route>        
        {/* <Route path="/instalinks3" exact>
          <Instalinks3 />
        </Route>         */}
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
