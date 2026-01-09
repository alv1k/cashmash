# CashMash Backend API

This is the backend API for the CashMash mobile application, built with Node.js and Express. It provides REST API endpoints to interact with the MySQL database.

## Setup

1. Install dependencies:
```bash
cd server
npm install
```

2. Create a `.env` file in the server directory with your database configuration:
```env
DB_HOST=localhost
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_NAME=cashmash_db
DB_PORT=3306
PORT=3000
```

3. Create the database schema by running the SQL in `database/schema.sql` on your MySQL server.

4. Start the server:
```bash
npm start
# or for development with auto-restart:
npm run dev
```

## API Endpoints

### Financial Records
- `GET /api/financial-records` - Get all financial records
- `GET /api/financial-records/:id` - Get a specific financial record
- `POST /api/financial-records` - Create a new financial record
- `PUT /api/financial-records/:id` - Update a financial record
- `DELETE /api/financial-records/:id` - Delete a financial record

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get a specific user
- `POST /api/users` - Create a new user
- `PUT /api/users/:id` - Update a user
- `DELETE /api/users/:id` - Delete a user

### Receipts
- `GET /api/receipts` - Get all receipts
- `GET /api/receipts/:id` - Get a specific receipt
- `GET /api/receipts/user/:userId` - Get receipts by user ID
- `POST /api/receipts` - Create a new receipt
- `PUT /api/receipts/:id` - Update a receipt
- `DELETE /api/receipts/:id` - Delete a receipt

### Accounts
- `GET /api/accounts` - Get all accounts
- `GET /api/accounts/:id` - Get a specific account
- `GET /api/accounts/user/:userId` - Get accounts by user ID
- `POST /api/accounts` - Create a new account
- `PUT /api/accounts/:id` - Update an account
- `DELETE /api/accounts/:id` - Delete an account

## Database Schema

The database includes the following tables:
- `users` - User information
- `financial_records` - Income and expense records
- `receipts` - Receipt images and information
- `accounts` - Financial accounts (checking, savings, etc.)

## Running on VPS

To deploy on a VPS server:
1. Install Node.js and MySQL on your VPS
2. Configure your MySQL server to accept remote connections if needed
3. Update the `.env` file with your VPS IP address and database credentials
4. Set up a process manager like PM2 to keep the server running
5. Configure a reverse proxy (like Nginx) if needed