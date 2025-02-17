const express = require('express');
const { addLogsheet, getLogsheets } = require('../controllers/logsheetController');
const router = express.Router();

router.post('/add', addLogsheet);
router.get('/', getLogsheets);

module.exports = router;
