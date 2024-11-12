const express = require('express'); // Express.js framework'ünü dahil eder.
const router = express.Router(); // Yeni bir router nesnesi oluşturur.
const mainController = require('../controllers/mainController'); // mainController dosyasını dahil eder.

// Ana sayfa rotası
router.get('/', mainController.home); // GET isteği için ana sayfa rotasını tanımlar ve home kontrolör fonksiyonunu çağırır.

// Hakkında sayfası rotası
router.get('/about', mainController.about); // GET isteği için hakkında sayfası rotasını tanımlar ve about kontrolör fonksiyonunu çağırır.

module.exports = router; // Router'ı dışa aktarır.
