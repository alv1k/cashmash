const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

// Use the connection pool
const db = require('./config/db');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Test database connection
db.getConnection()
  .then(([connection]) => {
    console.log('Connected to MySQL database');
    connection.release();
  })
  .catch(err => {
    console.error('Database connection failed:', err);
  });

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'CashMash Backend API is running!' });
});

const financialRecordsRouter = require('./routes/financialRecords');
const usersRouter = require('./routes/users');
const receiptsRouter = require('./routes/receipts');
const accountsRouter = require('./routes/accounts');

// Use routes
app.use('/api/financial-records', financialRecordsRouter);
app.use('/api/users', usersRouter);
app.use('/api/receipts', receiptsRouter);
app.use('/api/accounts', accountsRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});