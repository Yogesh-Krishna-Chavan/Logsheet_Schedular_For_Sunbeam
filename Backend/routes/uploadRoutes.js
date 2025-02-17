const express = require('express');
const upload = require('../middlewares/uploadMiddleware');
const { uploadFile } = require('../controllers/uploadController');
const router = express.Router();

router.post('/upload', upload.single('file'), uploadFile);

module.exports = router;
