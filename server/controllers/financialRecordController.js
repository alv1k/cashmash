// controllers/financialRecordController.js
const FinancialRecord = require('../models/financialRecord');

const financialRecordController = {
  // Get all financial records
  getAll: async (req, res) => {
    try {
      const records = await FinancialRecord.getAll();
      res.json(records);
    } catch (error) {
      console.error('Error fetching financial records:', error);
      res.status(500).json({ error: 'Failed to fetch financial records' });
    }
  },

  // Get a specific financial record by ID
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const record = await FinancialRecord.getById(id);
      
      if (!record) {
        return res.status(404).json({ error: 'Financial record not found' });
      }
      
      res.json(record);
    } catch (error) {
      console.error('Error fetching financial record:', error);
      res.status(500).json({ error: 'Failed to fetch financial record' });
    }
  },

  // Create a new financial record
  create: async (req, res) => {
    try {
      const { user_id, type, category, amount, description, date } = req.body;
      
      // Validate required fields
      if (!user_id || !type || !category || !amount || !date) {
        return res.status(400).json({ error: 'Missing required fields' });
      }
      
      const newRecord = await FinancialRecord.create({
        user_id,
        type,
        category,
        amount,
        description,
        date
      });
      
      res.status(201).json(newRecord);
    } catch (error) {
      console.error('Error creating financial record:', error);
      res.status(500).json({ error: 'Failed to create financial record' });
    }
  },

  // Update a financial record
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { user_id, type, category, amount, description, date } = req.body;
      
      // Check if record exists
      const existingRecord = await FinancialRecord.getById(id);
      if (!existingRecord) {
        return res.status(404).json({ error: 'Financial record not found' });
      }
      
      // Update the record
      const updatedRecord = await FinancialRecord.update(id, {
        user_id,
        type,
        category,
        amount,
        description,
        date
      });
      
      res.json(updatedRecord);
    } catch (error) {
      console.error('Error updating financial record:', error);
      res.status(500).json({ error: 'Failed to update financial record' });
    }
  },

  // Delete a financial record
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      
      const existingRecord = await FinancialRecord.getById(id);
      if (!existingRecord) {
        return res.status(404).json({ error: 'Financial record not found' });
      }
      
      const result = await FinancialRecord.delete(id);
      res.json(result);
    } catch (error) {
      console.error('Error deleting financial record:', error);
      res.status(500).json({ error: 'Failed to delete financial record' });
    }
  }
};

module.exports = financialRecordController;