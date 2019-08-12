import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
const path = require('path');
require('dotenv').config({ path: '../../.env' });

console.log('****************************');
console.log('****************************');
console.log({ ENVL: window });
console.log(
  `${process.env.NODE_ENV} ${path.join(__dirname, '../../.env')} from CLIENT`
);
console.log('****************************');
console.log('****************************');

ReactDOM.render(<App />, document.getElementById('root'));
