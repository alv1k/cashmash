// controllers/accountController.js
const Account = require('../models/account');

const accountController = {
  // Get all accounts
  getAll: async (req, res) => {
    try {
      const accounts = await Account.getAll();
      res.json(accounts);
    } catch (error) {
      console.error('Error fetching accounts:', error);
      res.status(500).json({ error: 'Failed to fetch accounts' });
    }
  },

  // Get a specific account by ID
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const account = await Account.getById(id);
      
      if (!account) {
        return res.status(404).json({ error: 'Account not found' });
      }
      
      res.json(account);
    } catch (error) {
      console.error('Error fetching account:', error);
      res.status(500).json({ error: 'Failed to fetch account' });
    }
  },

  // Get accounts by user ID
  getByUserId: async (req, res) => {
    try {
      const { userId } = req.params;
      const accounts = await Account.getByUserId(userId);
      res.json(accounts);
    } catch (error) {
      console.error('Error fetching accounts by user ID:', error);
      res.status(500).json({ error: 'Failed to fetch accounts by user ID' });
    }
  },

  // Create a new account
  create: async (req, res) => {
    try {
      const { user_id, name, account_type, balance = 0, currency = 'USD', is_active = true } = req.body;
      
      // Validate required fields
      if (!user_id || !name || !account_type) {
        return res.status(400).json({ error: 'Missing required fields' });
      }
      
      const newAccount = await Account.create({
        user_id,
        name,
        account_type,
        balance,
        currency,
        is_active
      });
      
      res.status(201).json(newAccount);
    } catch (error) {
      console.error('Error creating account:', error);
      res.status(500).json({ error: 'Failed to create account' });
    }
  },

  // Update an account
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { user_id, name, account_type, balance, currency, is_active } = req.body;
      
      // Check if account exists
      const existingAccount = await Account.getById(id);
      if (!existingAccount) {
        return res.status(404).json({ error: 'Account not found' });
      }
      
      // Update the account
      const updatedAccount = await Account.update(id, {
        user_id,
        name,
        account_type,
        balance,
        currency,
        is_active
      });
      
      res.json(updatedAccount);
    } catch (error) {
      console.error('Error updating account:', error);
      res.status(500).json({ error: 'Failed to update account' });
    }
  },

  // Delete an account
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      
      const existingAccount = await Account.getById(id);
      if (!existingAccount) {
        return res.status(404).json({ error: 'Account not found' });
      }
      
      const result = await Account.delete(id);
      res.json(result);
    } catch (error) {
      console.error('Error deleting account:', error);
      res.status(500).json({ error: 'Failed to delete account' });
    }
  }
};

module.exports = accountController;