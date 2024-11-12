const express = require('express'); // Express.js framework'ünü dahil eder.
const router = express.Router(); // Yeni bir router nesnesi oluşturur.
const mainController = require('../controllers/mainController'); // Kontrolör dosyasını dahil eder.

// Ana sayfa rotası
router.get('/', mainController.home); // Ana sayfa isteğini home kontrolör fonksiyonuna yönlendirir.

// Hakkında sayfası rotası
router.get('/about', mainController.about); // Hakkında sayfası isteğini about kontrolör fonksiyonuna yönlendirir.

module.exports = router; // Router'ı dışa aktarır.
