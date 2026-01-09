// models/user.js
const db = require('../config/db');

const User = {
  // Get all users
  getAll: async () => {
    const [rows] = await db.execute('SELECT * FROM users');
    return rows;
  },

  // Get user by ID
  getById: async (id) => {
    const [rows] = await db.execute('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0];
  },

  // Get user by email
  getByEmail: async (email) => {
    const [rows] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
    return rows[0];
  },

  // Create a new user
  create: async (data) => {
    const { username, email, password, first_name, last_name } = data;
    const [result] = await db.execute(
      'INSERT INTO users (username, email, password, first_name, last_name) VALUES (?, ?, ?, ?, ?)',
      [username, email, password, first_name, last_name]
    );
    return { id: result.insertId, username, email, first_name, last_name };
  },

  // Update a user
  update: async (id, data) => {
    const { username, email, password, first_name, last_name } = data;
    await db.execute(
      'UPDATE users SET username = ?, email = ?, password = ?, first_name = ?, last_name = ? WHERE id = ?',
      [username, email, password, first_name, last_name, id]
    );
    return await User.getById(id);
  },

  // Delete a user
  delete: async (id) => {
    await db.execute('DELETE FROM users WHERE id = ?', [id]);
    return { message: 'User deleted successfully' };
  }
};

module.exports = User;