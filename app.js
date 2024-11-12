const express = require('express'); // Express.js framework'ünü dahil eder.
const path = require('path'); // Node.js'in path modülünü dahil eder.
const app = express(); // Yeni bir Express uygulaması oluşturur.
const port = 3000; // Uygulamanın çalışacağı portu belirler.

// Pug ayarları
app.set('views', path.join(__dirname, 'views')); // Pug şablonlarının bulunduğu dizini ayarlar.
app.set('view engine', 'pug'); // Pug'ı şablon motoru olarak ayarlar.

// Rotalar
const mainRoutes = require('./routes/mainRoutes'); // Rota dosyasını dahil eder.
app.use('/', mainRoutes); // Ana rotaları kullanır. (Middleware)

// Sunucuyu başlatır
app.listen(port, () => {
  console.log(`Uygulama http://localhost:${port} adresinde çalışıyor.`); // Sunucunun çalıştığını konsola yazdırır.
});
