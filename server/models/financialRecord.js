// models/financialRecord.js
const db = require('../config/db');

const FinancialRecord = {
  // Get all financial records
  getAll: async () => {
    const [rows] = await db.execute('SELECT * FROM financial_records ORDER BY date DESC');
    return rows;
  },

  // Get financial record by ID
  getById: async (id) => {
    const [rows] = await db.execute('SELECT * FROM financial_records WHERE id = ?', [id]);
    return rows[0];
  },

  // Create a new financial record
  create: async (data) => {
    const { user_id, type, category, amount, description, date } = data;
    const [result] = await db.execute(
      'INSERT INTO financial_records (user_id, type, category, amount, description, date) VALUES (?, ?, ?, ?, ?, ?)',
      [user_id, type, category, amount, description, date]
    );
    return { id: result.insertId, ...data };
  },

  // Update a financial record
  update: async (id, data) => {
    const { user_id, type, category, amount, description, date } = data;
    await db.execute(
      'UPDATE financial_records SET user_id = ?, type = ?, category = ?, amount = ?, description = ?, date = ? WHERE id = ?',
      [user_id, type, category, amount, description, date, id]
    );
    return await FinancialRecord.getById(id);
  },

  // Delete a financial record
  delete: async (id) => {
    await db.execute('DELETE FROM financial_records WHERE id = ?', [id]);
    return { message: 'Financial record deleted successfully' };
  }
};

module.exports = FinancialRecord;