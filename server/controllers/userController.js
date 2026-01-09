// controllers/userController.js
const User = require('../models/user');

const userController = {
  // Get all users
  getAll: async (req, res) => {
    try {
      const users = await User.getAll();
      res.json(users);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Failed to fetch users' });
    }
  },

  // Get a specific user by ID
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.getById(id);
      
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      
      res.json(user);
    } catch (error) {
      console.error('Error fetching user:', error);
      res.status(500).json({ error: 'Failed to fetch user' });
    }
  },

  // Create a new user
  create: async (req, res) => {
    try {
      const { username, email, password, first_name, last_name } = req.body;
      
      // Validate required fields
      if (!username || !email || !password) {
        return res.status(400).json({ error: 'Missing required fields' });
      }
      
      // Check if user already exists
      const existingUser = await User.getByEmail(email);
      if (existingUser) {
        return res.status(409).json({ error: 'User with this email already exists' });
      }
      
      const newUser = await User.create({
        username,
        email,
        password, // In a real app, you'd hash the password
        first_name,
        last_name
      });
      
      res.status(201).json(newUser);
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Failed to create user' });
    }
  },

  // Update a user
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { username, email, password, first_name, last_name } = req.body;
      
      // Check if user exists
      const existingUser = await User.getById(id);
      if (!existingUser) {
        return res.status(404).json({ error: 'User not found' });
      }
      
      // Update the user
      const updatedUser = await User.update(id, {
        username,
        email,
        password,
        first_name,
        last_name
      });
      
      res.json(updatedUser);
    } catch (error) {
      console.error('Error updating user:', error);
      res.status(500).json({ error: 'Failed to update user' });
    }
  },

  // Delete a user
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      
      const existingUser = await User.getById(id);
      if (!existingUser) {
        return res.status(404).json({ error: 'User not found' });
      }
      
      const result = await User.delete(id);
      res.json(result);
    } catch (error) {
      console.error('Error deleting user:', error);
      res.status(500).json({ error: 'Failed to delete user' });
    }
  }
};

module.exports = userController;