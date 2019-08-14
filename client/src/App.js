import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

import './App.scss';

import Navbar from './Navbar';
import Main from './Main';

const App = () => (
  <Router>
    <div className="container-fluid">
      <Navbar />
      <Main />
    </div>
  </Router>
);

export default App;
