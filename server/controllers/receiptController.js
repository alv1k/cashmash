// controllers/receiptController.js
const Receipt = require('../models/receipt');

const receiptController = {
  // Get all receipts
  getAll: async (req, res) => {
    try {
      const receipts = await Receipt.getAll();
      res.json(receipts);
    } catch (error) {
      console.error('Error fetching receipts:', error);
      res.status(500).json({ error: 'Failed to fetch receipts' });
    }
  },

  // Get a specific receipt by ID
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const receipt = await Receipt.getById(id);
      
      if (!receipt) {
        return res.status(404).json({ error: 'Receipt not found' });
      }
      
      res.json(receipt);
    } catch (error) {
      console.error('Error fetching receipt:', error);
      res.status(500).json({ error: 'Failed to fetch receipt' });
    }
  },

  // Get receipts by user ID
  getByUserId: async (req, res) => {
    try {
      const { userId } = req.params;
      const receipts = await Receipt.getByUserId(userId);
      res.json(receipts);
    } catch (error) {
      console.error('Error fetching receipts by user ID:', error);
      res.status(500).json({ error: 'Failed to fetch receipts by user ID' });
    }
  },

  // Create a new receipt
  create: async (req, res) => {
    try {
      const { user_id, financial_record_id, title, image_url, file_path, total_amount, date } = req.body;
      
      // Validate required fields
      if (!user_id || !title) {
        return res.status(400).json({ error: 'Missing required fields' });
      }
      
      const newReceipt = await Receipt.create({
        user_id,
        financial_record_id,
        title,
        image_url,
        file_path,
        total_amount,
        date
      });
      
      res.status(201).json(newReceipt);
    } catch (error) {
      console.error('Error creating receipt:', error);
      res.status(500).json({ error: 'Failed to create receipt' });
    }
  },

  // Update a receipt
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { user_id, financial_record_id, title, image_url, file_path, total_amount, date } = req.body;
      
      // Check if receipt exists
      const existingReceipt = await Receipt.getById(id);
      if (!existingReceipt) {
        return res.status(404).json({ error: 'Receipt not found' });
      }
      
      // Update the receipt
      const updatedReceipt = await Receipt.update(id, {
        user_id,
        financial_record_id,
        title,
        image_url,
        file_path,
        total_amount,
        date
      });
      
      res.json(updatedReceipt);
    } catch (error) {
      console.error('Error updating receipt:', error);
      res.status(500).json({ error: 'Failed to update receipt' });
    }
  },

  // Delete a receipt
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      
      const existingReceipt = await Receipt.getById(id);
      if (!existingReceipt) {
        return res.status(404).json({ error: 'Receipt not found' });
      }
      
      const result = await Receipt.delete(id);
      res.json(result);
    } catch (error) {
      console.error('Error deleting receipt:', error);
      res.status(500).json({ error: 'Failed to delete receipt' });
    }
  }
};

module.exports = receiptController;