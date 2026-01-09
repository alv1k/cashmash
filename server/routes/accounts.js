// routes/accounts.js
const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');

// CRUD routes for accounts
router.get('/', accountController.getAll);
router.get('/:id', accountController.getById);
router.get('/user/:userId', accountController.getByUserId); // Get accounts by user ID
router.post('/', accountController.create);
router.put('/:id', accountController.update);
router.delete('/:id', accountController.delete);

module.exports = router;