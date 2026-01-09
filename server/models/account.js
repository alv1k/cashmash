// models/account.js
const db = require('../config/db');

const Account = {
  // Get all accounts
  getAll: async () => {
    const [rows] = await db.execute('SELECT * FROM accounts');
    return rows;
  },

  // Get account by ID
  getById: async (id) => {
    const [rows] = await db.execute('SELECT * FROM accounts WHERE id = ?', [id]);
    return rows[0];
  },

  // Get accounts by user ID
  getByUserId: async (userId) => {
    const [rows] = await db.execute('SELECT * FROM accounts WHERE user_id = ?', [userId]);
    return rows;
  },

  // Create a new account
  create: async (data) => {
    const { user_id, name, account_type, balance, currency, is_active } = data;
    const [result] = await db.execute(
      'INSERT INTO accounts (user_id, name, account_type, balance, currency, is_active) VALUES (?, ?, ?, ?, ?, ?)',
      [user_id, name, account_type, balance, currency, is_active]
    );
    return { id: result.insertId, ...data };
  },

  // Update an account
  update: async (id, data) => {
    const { user_id, name, account_type, balance, currency, is_active } = data;
    await db.execute(
      'UPDATE accounts SET user_id = ?, name = ?, account_type = ?, balance = ?, currency = ?, is_active = ? WHERE id = ?',
      [user_id, name, account_type, balance, currency, is_active, id]
    );
    return await Account.getById(id);
  },

  // Delete an account
  delete: async (id) => {
    await db.execute('DELETE FROM accounts WHERE id = ?', [id]);
    return { message: 'Account deleted successfully' };
  }
};

module.exports = Account;