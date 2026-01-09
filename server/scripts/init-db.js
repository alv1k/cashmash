// scripts/init-db.js
require('dotenv').config();
const mysql = require('mysql2/promise');
const fs = require('fs').promises;
const path = require('path');

async function initDatabase() {
  console.log('Initializing CashMash database...');
  
  // Read the schema file
  const schemaPath = path.join(__dirname, '../server/database/schema.sql');
  const schemaSQL = await fs.readFile(schemaPath, 'utf8');
  
  // Create database connection
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    port: process.env.DB_PORT || 3306
  });
  
  try {
    // Create database if it doesn't exist
    await connection.execute(`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME || 'cashmash_db'}\``);
    console.log('Database created or already exists');
    
    // Use the database
    await connection.execute(`USE \`${process.env.DB_NAME || 'cashmash_db'}\``);
    
    // Execute the schema
    await connection.execute(schemaSQL);
    console.log('Schema applied successfully');
    
    // Insert sample data
    console.log('Inserting sample data...');
    
    // Insert a sample user
    const [userResult] = await connection.execute(
      'INSERT INTO users (username, email, password, first_name, last_name) VALUES (?, ?, ?, ?, ?)',
      ['johndoe', 'john@example.com', 'hashed_password', 'John', 'Doe']
    );
    
    const userId = userResult.insertId;
    
    // Insert sample financial records
    await connection.execute(
      'INSERT INTO financial_records (user_id, type, category, amount, description, date) VALUES (?, ?, ?, ?, ?, ?)',
      [userId, 'income', 'Salary', 3000.00, 'Monthly salary', '2023-01-15']
    );
    
    await connection.execute(
      'INSERT INTO financial_records (user_id, type, category, amount, description, date) VALUES (?, ?, ?, ?, ?, ?)',
      [userId, 'expense', 'Food', 45.60, 'Grocery shopping', '2023-01-16']
    );
    
    await connection.execute(
      'INSERT INTO financial_records (user_id, type, category, amount, description, date) VALUES (?, ?, ?, ?, ?, ?)',
      [userId, 'expense', 'Transport', 25.00, 'Gas', '2023-01-17']
    );
    
    // Insert sample account
    await connection.execute(
      'INSERT INTO accounts (user_id, name, account_type, balance, currency) VALUES (?, ?, ?, ?, ?)',
      [userId, 'Checking Account', 'checking', 2500.00, 'USD']
    );
    
    console.log('Sample data inserted successfully');
    console.log('Database initialization completed!');
  } catch (error) {
    console.error('Error initializing database:', error);
  } finally {
    await connection.end();
  }
}

// Run the initialization
initDatabase();