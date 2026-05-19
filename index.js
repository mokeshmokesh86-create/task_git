const express = require('express');
require('dotenv').config();

const app = express();

require('./database/db.js');

app.use(express.json());

const employeeRoutes = require('./routes/employeeRoutes');
const bookRoutes = require('./routes/bookRoutes');

app.use('/api', employeeRoutes);
app.use('/api', bookRoutes);

app.listen(3000, () => {
  console.log('Server Running on Port 3000');
});