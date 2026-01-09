// models/receipt.js
const db = require('../config/db');

const Receipt = {
  // Get all receipts
  getAll: async () => {
    const [rows] = await db.execute('SELECT * FROM receipts ORDER BY date DESC');
    return rows;
  },

  // Get receipt by ID
  getById: async (id) => {
    const [rows] = await db.execute('SELECT * FROM receipts WHERE id = ?', [id]);
    return rows[0];
  },

  // Get receipts by user ID
  getByUserId: async (userId) => {
    const [rows] = await db.execute('SELECT * FROM receipts WHERE user_id = ? ORDER BY date DESC', [userId]);
    return rows;
  },

  // Create a new receipt
  create: async (data) => {
    const { user_id, financial_record_id, title, image_url, file_path, total_amount, date } = data;
    const [result] = await db.execute(
      'INSERT INTO receipts (user_id, financial_record_id, title, image_url, file_path, total_amount, date) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [user_id, financial_record_id, title, image_url, file_path, total_amount, date]
    );
    return { id: result.insertId, ...data };
  },

  // Update a receipt
  update: async (id, data) => {
    const { user_id, financial_record_id, title, image_url, file_path, total_amount, date } = data;
    await db.execute(
      'UPDATE receipts SET user_id = ?, financial_record_id = ?, title = ?, image_url = ?, file_path = ?, total_amount = ?, date = ? WHERE id = ?',
      [user_id, financial_record_id, title, image_url, file_path, total_amount, date, id]
    );
    return await Receipt.getById(id);
  },

  // Delete a receipt
  delete: async (id) => {
    await db.execute('DELETE FROM receipts WHERE id = ?', [id]);
    return { message: 'Receipt deleted successfully' };
  }
};

module.exports = Receipt;