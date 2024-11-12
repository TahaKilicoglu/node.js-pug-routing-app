const express = require('express'); // Express.js framework'ünü dahil eder.
const router = express.Router(); // Yeni bir router nesnesi oluşturur.
const loginController = require('../controllers/loginController'); // loginController dosyasını dahil eder.

// Giriş sayfası rotası
router.get('/login', loginController.loginPage); // GET isteği için /login rotasını tanımlar ve loginPage kontrolör fonksiyonunu çağırır.

// Giriş işlemi rotası
router.post('/login', loginController.login); // POST isteği için /login rotasını tanımlar ve login kontrolör fonksiyonunu çağırır.

module.exports = router; // Router'ı dışa aktarır.
