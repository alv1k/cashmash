// routes/financialRecords.js
const express = require('express');
const router = express.Router();
const financialRecordController = require('../controllers/financialRecordController');

// CRUD routes for financial records
router.get('/', financialRecordController.getAll);
router.get('/:id', financialRecordController.getById);
router.post('/', financialRecordController.create);
router.put('/:id', financialRecordController.update);
router.delete('/:id', financialRecordController.delete);

module.exports = router;