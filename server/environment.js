const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

export const { PORT, DB_URI } = process.env;
