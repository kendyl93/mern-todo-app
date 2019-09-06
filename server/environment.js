const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

export const {
  PORT = 4000,
  DB_URI = 'mongodb://kendyl93:todo-app123@ds263856.mlab.com:63856/todos-mern'
} = process.env;
