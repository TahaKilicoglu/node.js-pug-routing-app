const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

// Ana sayfa rotası
router.get('/', mainController.home);

// Hakkında sayfası rotası
router.get('/about', mainController.about);

module.exports = router;
