import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Navbar';
import Main from './Main';

import './App.css';

const App = () => (
  <Router>
    <div className="container-fluid">
      <Navbar />
      <Main />
    </div>
  </Router>
);

export default App;
