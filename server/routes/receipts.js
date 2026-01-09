// routes/receipts.js
const express = require('express');
const router = express.Router();
const receiptController = require('../controllers/receiptController');

// CRUD routes for receipts
router.get('/', receiptController.getAll);
router.get('/:id', receiptController.getById);
router.get('/user/:userId', receiptController.getByUserId); // Get receipts by user ID
router.post('/', receiptController.create);
router.put('/:id', receiptController.update);
router.delete('/:id', receiptController.delete);

module.exports = router;